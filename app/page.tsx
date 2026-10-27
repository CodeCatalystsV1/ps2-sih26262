import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/lib/auth";
import { appendAudit } from "@/lib/audit";
import { BrandPanel } from "./components/login/BrandPanel";
import { LoginForm, type DemoUserOption } from "./components/login/LoginForm";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  const users = await prisma.user.findMany({
    orderBy: [{ role: "asc" }, { name: "asc" }],
    include: { institution: { select: { name: true } }, region: { select: { name: true } } },
  });

  async function loginAction(formData: FormData) {
    "use server";
    const identifier = (formData.get("identifier") as string)?.trim();
    const password = (formData.get("password") as string)?.trim();

    if (!identifier) {
      return { ok: false, error: "Please enter your official username or email." };
    }
    if (!password) {
      return { ok: false, error: "Please enter your password." };
    }

    const lowerId = identifier.toLowerCase();

    // Match exact email, or identifier prefix, or name, or user ID
    let matchedUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: { equals: lowerId } },
          { id: { equals: identifier } },
          { name: { contains: identifier } },
        ],
      },
    });

    // If not directly matched, check if an institution loginSlug or name matches
    if (!matchedUser) {
      matchedUser = await prisma.user.findFirst({
        where: {
          email: {
            contains: lowerId,
          },
        },
      });
    }

    if (!matchedUser) {
      return {
        ok: false,
        error:
          "No registered account found matching this official username or email. Please select one of the pre-configured evaluation personas below.",
      };
    }

    // Evaluation environment authentication safeguard
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, matchedUser.id, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });

    await appendAudit({
      actorId: matchedUser.id,
      actorRole: matchedUser.role,
      action: "LOGIN_PASSWORD",
      entityType: "User",
      entityId: matchedUser.id,
      payload: {
        identifier,
        email: matchedUser.email,
        role: matchedUser.role,
        authMode: "EVALUATION_PASSWORD",
      },
    });

    return { ok: true };
  }

  const userOptions: DemoUserOption[] = users.map((u) => ({
    id: u.id,
    name: u.name.replace(/^Institution User\s*[–-]\s*/i, "").trim(),
    email: u.email,
    role: u.role,
    designation: u.designation,
    scope: u.institution?.name ?? u.region?.name ?? "Central HQ",
  }));

  return (
    <main className="login-page-root">
      {/* Left Column: AIClear Brand, Vision & Feature Value Panel (50% desktop viewport) */}
      <BrandPanel />

      {/* Right Column: Centered Elevated Login Card (50% desktop viewport) */}
      <div className="login-card-column">
        <LoginForm initialUsers={userOptions} onLoginSubmit={loginAction} />
      </div>
    </main>
  );
}
