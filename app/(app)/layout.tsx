import { getCurrentUser, COOKIE_NAME } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { appendAudit } from "@/lib/audit";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import { SidebarNav } from "./SidebarNav";
import { SidebarToggle } from "./SidebarToggle";
import { UserSwitcher } from "./UserSwitcher";
import { ShieldCheck, Calendar, Bell, Shield, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

const ROLE_LABELS: Record<string, string> = {
  ADMIN: "System Admin",
  BUREAU_OFFICER: "Bureau Officer",
  REGIONAL_OFFICER: "Regional Officer",
  EVC_COMMITTEE: "EVC Committee",
  SAC_SHC_MEMBER: "SAC / SHC Member",
  INSTITUTION: "Institution",
};

const ROLE_SHORT: Record<string, string> = {
  ADMIN: "Admin",
  BUREAU_OFFICER: "Bureau",
  REGIONAL_OFFICER: "Regional",
  EVC_COMMITTEE: "EVC",
  SAC_SHC_MEMBER: "SAC/SHC",
  INSTITUTION: "Institution",
};

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect("/");

  const unreadCount = await prisma.notification.count({
    where: { toUserId: user.id, readAt: null },
  });

  const clock = await prisma.systemClock.findUnique({ where: { id: 1 } });
  const isSimulating = !!clock?.simulatedNow;

  const allUsers = await prisma.user.findMany({
    orderBy: [{ role: "asc" }, { name: "asc" }],
  });

  const isInstitution = user.role === "INSTITUTION";

  async function switchUser(formData: FormData) {
    "use server";
    const userId = formData.get("userId") as string;
    const requestedReturnTo = formData.get("returnTo");
    const returnTo =
      typeof requestedReturnTo === "string" && requestedReturnTo.startsWith("/") && !requestedReturnTo.startsWith("//")
        ? requestedReturnTo
        : "/dashboard";
    if (!userId) return;
    const picked = await prisma.user.findUnique({ where: { id: userId } });
    if (!picked) return;
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, userId, { httpOnly: true, path: "/", sameSite: "lax" });
    await appendAudit({
      actorId: picked.id,
      actorRole: picked.role,
      action: "LOGIN_SWITCH",
      entityType: "User",
      entityId: picked.id,
      payload: { userId: picked.id, role: picked.role },
    });
    redirect(returnTo);
  }

  const navItems = [
    { href: "/dashboard", label: "Dashboard", roles: ["all"] },
    { href: "/demo", label: "Process Guide", roles: ["ADMIN"] },
    { href: "/applications", label: "Applications", roles: ["all"] },
    ...(!isInstitution
      ? [
          {
            href: "/evc",
            label: "EVC Inspections",
            roles: ["REGIONAL_OFFICER", "BUREAU_OFFICER", "EVC_COMMITTEE", "ADMIN"],
          },
        ]
      : []),
    ...(!isInstitution
      ? [{ href: "/undertakings", label: "Undertakings", roles: ["REGIONAL_OFFICER", "BUREAU_OFFICER", "ADMIN"] }]
      : [{ href: "/undertakings", label: "Undertakings", roles: ["INSTITUTION"] }]),
    {
      href: "/documents",
      label: "Documents",
      roles: ["INSTITUTION", "REGIONAL_OFFICER", "BUREAU_OFFICER", "ADMIN"],
    },
    { href: "/escalations", label: "Escalations", roles: ["REGIONAL_OFFICER", "BUREAU_OFFICER", "ADMIN"] },
    { href: "/notifications", label: "Notifications", roles: ["all"] },
    { href: "/reports", label: "Reports", roles: ["REGIONAL_OFFICER", "BUREAU_OFFICER", "ADMIN"] },
    { href: "/audit", label: "Audit Trail", roles: ["BUREAU_OFFICER", "ADMIN", "REGIONAL_OFFICER"] },
    { href: "/admin", label: "Admin", roles: ["ADMIN"] },
  ]
    .filter((item) => item.roles.includes("all") || item.roles.includes(user.role))
    .map(({ href, label }) => ({ href, label }));

  const roleAccent =
    user.role === "INSTITUTION"
      ? "#0D9488"
      : user.role === "REGIONAL_OFFICER"
        ? "#315FE8"
        : user.role === "BUREAU_OFFICER"
          ? "#4F46E5"
          : user.role === "EVC_COMMITTEE"
            ? "#D97706"
            : user.role === "SAC_SHC_MEMBER"
              ? "#7C3AED"
              : "#0F172A";

  const roleBadgeBg =
    user.role === "INSTITUTION"
      ? "#CCFBF1"
      : user.role === "REGIONAL_OFFICER"
        ? "#EEF2FF"
        : user.role === "BUREAU_OFFICER"
          ? "#E0E7FF"
          : user.role === "EVC_COMMITTEE"
            ? "#FEF3C7"
            : user.role === "SAC_SHC_MEMBER"
              ? "#EDE9FE"
              : "#F1F5F9";

  const roleBadgeText =
    user.role === "INSTITUTION"
      ? "#0F766E"
      : user.role === "REGIONAL_OFFICER"
        ? "#1E40AF"
        : user.role === "BUREAU_OFFICER"
          ? "#3730A3"
          : user.role === "EVC_COMMITTEE"
            ? "#92400E"
            : user.role === "SAC_SHC_MEMBER"
              ? "#5B21B6"
              : "#334155";

  return (
    <div data-role={user.role} className="app-shell min-h-screen">
      <div className="role-accent-stripe" style={{ background: roleAccent }} />

      {/* Decorative AICTE Logo Watermark Background (Behind Content, Pointer-Events None) */}
      <div className="aicte-watermark" aria-hidden="true" />

      {/* Sidebar: Midnight Navy */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <Link href="/dashboard" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 9,
                background: "#EA580C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                flexShrink: 0,
                boxShadow: "0 2px 10px rgba(234, 88, 12, 0.4)",
              }}
            >
              <ShieldCheck size={18} strokeWidth={2.4} />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                  AIClear
                </span>
                <span className="logo-dot" />
              </div>
              <p style={{ fontSize: 10.5, color: "#94A3B8", fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}>
                Approval Intelligence
              </p>
            </div>
          </Link>
        </div>

        <SidebarNav items={navItems} unreadCount={unreadCount} />

        {/* Sidebar Footer User Card */}
        <div className="sidebar-user">
          <div className="sidebar-user-title">Active Workspace</div>
          <div className="sidebar-user-name">
            {user.name.replace(/^Institution User\s*[–-]\s*/i, "").trim()}
          </div>
          <div
            className="sidebar-user-role"
            style={{ background: roleBadgeBg, color: roleBadgeText, border: `1px solid ${roleAccent}33` }}
          >
            {ROLE_LABELS[user.role] ?? user.role}
          </div>
          <div style={{ marginTop: 10 }}>
            <Link
              href="/"
              className="btn btn-secondary btn-sm"
              style={{
                width: "100%",
                justifyContent: "space-between",
                fontSize: 11.5,
                background: "#1E293B",
                color: "#F1F5F9",
                borderColor: "#334155",
              }}
            >
              <span>Switch persona</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </aside>

      {/* Topbar: Polished White Header */}
      <header className="topbar">
        <SidebarToggle />
        <div className="topbar-title" id="page-title">
          <Shield size={16} className="text-[#EA580C] shrink-0" />
          <span>AIClear Regulatory Portal</span>
          <span style={{ fontSize: 11, color: "#94A3B8", fontWeight: 500 }}>· SIH26262</span>
        </div>

        {isSimulating && (
          <Link
            href={user.role === "ADMIN" ? "/admin" : "/dashboard"}
            className="clock-badge"
            title="System calendar override is active"
          >
            <Calendar size={12} className="text-[#EA580C]" />
            <span>
              {new Date(clock!.simulatedNow!).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </Link>
        )}

        <div
          className="role-persona-badge"
          style={{ background: roleBadgeBg, color: roleBadgeText, borderColor: `${roleAccent}44` }}
        >
          {ROLE_SHORT[user.role] ?? user.role}
        </div>

        <div className="user-switcher">
          <UserSwitcher
            users={allUsers}
            currentUserId={user.id}
            action={switchUser}
            roleLabels={ROLE_SHORT}
          />
        </div>

        <Link href="/notifications" className="notif-bell" title="Notifications">
          <Bell size={13} />
          <span>Alerts</span>
          {unreadCount > 0 && <span className="notif-count">{unreadCount > 99 ? "99+" : unreadCount}</span>}
        </Link>
      </header>

      {/* Main Content Area: Soft Slate Canvas */}
      <main className="main">
        <div className="main-body">{children}</div>

        <footer
          className="safeguards-banner"
          style={{
            marginTop: 32,
            padding: "14px 18px",
            borderRadius: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 12,
            color: "#64748B",
          }}
        >
          <div style={{ color: "#0D9488", display: "flex", alignItems: "center" }}>
            <ShieldCheck size={16} />
          </div>
          <div>
            <strong style={{ color: "#0F172A", marginRight: 6 }}>Statutory Safeguard:</strong>
            <span>
              Workflow automation and APH compliance checks assist scrutiny; final approval authority strictly rests with designated AICTE officers.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
