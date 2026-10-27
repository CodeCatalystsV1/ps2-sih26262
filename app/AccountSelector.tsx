"use client";

import { useState, useRef, useEffect } from "react";

type UserOption = {
  id: string;
  name: string;
  email: string;
  role: string;
  scope: string;
};

const ROLE_META: Record<string, { label: string; bg: string; color: string }> = {
  INSTITUTION: { label: "Institution", bg: "#CCFBF1", color: "#0F766E" },
  REGIONAL_OFFICER: { label: "Regional", bg: "#E0E7FF", color: "#3730A3" },
  BUREAU_OFFICER: { label: "Bureau", bg: "#DBEAFE", color: "#1E40AF" },
  EVC_COMMITTEE: { label: "EVC", bg: "#FEF3C7", color: "#92400E" },
  SAC_SHC_MEMBER: { label: "SAC/SHC", bg: "#EDE9FE", color: "#5B21B6" },
  ADMIN: { label: "Admin", bg: "#F1F5F9", color: "#334155" },
};

export function AccountSelector({
  users,
  switchUserAction,
}: {
  users: UserOption[];
  switchUserAction: (formData: FormData) => void;
}) {
  const [selectedId, setSelectedId] = useState(users[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const [filterRole, setFilterRole] = useState("ALL");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const selected = users.find((u) => u.id === selectedId) ?? users[0];
  const filteredUsers =
    filterRole === "ALL" ? users : users.filter((u) => u.role === filterRole);

  return (
    <form action={switchUserAction}>
      <input type="hidden" name="userId" value={selected?.id ?? ""} />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "stretch" }}>
        <div ref={containerRef} style={{ position: "relative", flex: 1, minWidth: 280 }}>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Switch active demo persona"
            aria-expanded={open}
            aria-haspopup="listbox"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              padding: "11px 18px",
              borderRadius: 9999,
              border: open ? "1.5px solid var(--aiclear-indigo)" : "1.5px solid var(--border)",
              background: "#FFFFFF",
              cursor: "pointer",
              textAlign: "left",
              boxShadow: open ? "0 0 0 3px rgba(49, 95, 232, 0.12)" : "none",
            }}
          >
            {selected ? (
              <div style={{ display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    background: ROLE_META[selected.role]?.bg ?? "var(--bg-subtle)",
                    color: ROLE_META[selected.role]?.color ?? "var(--aiclear-text-primary)",
                    padding: "2px 9px",
                    borderRadius: 9999,
                    border: "1px solid rgba(0,0,0,0.08)",
                    flexShrink: 0,
                  }}
                >
                  {ROLE_META[selected.role]?.label ?? selected.role}
                </span>
                <span style={{ fontWeight: 700, fontSize: 13.5, color: "var(--aiclear-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {selected.name}
                </span>
                <span style={{ fontSize: 12, color: "var(--aiclear-text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  · {selected.scope}
                </span>
              </div>
            ) : (
              <span>Select user...</span>
            )}
            <span className="font-mono" style={{ fontSize: 11.5, fontWeight: 700, color: "var(--aiclear-text-secondary)" }}>
              {open ? "Close" : "Change"}
            </span>
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                bottom: "calc(100% + 8px)",
                left: 0,
                right: 0,
                background: "#FFFFFF",
                border: "1.5px solid var(--forest)",
                borderRadius: 18,
                boxShadow: "6px 6px 0px var(--forest)",
                zIndex: 150,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "10px 12px",
                  borderBottom: "1px solid var(--border)",
                  background: "var(--bg)",
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {["ALL", "INSTITUTION", "REGIONAL_OFFICER", "BUREAU_OFFICER", "EVC_COMMITTEE", "SAC_SHC_MEMBER", "ADMIN"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setFilterRole(r)}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 9999,
                      border: "1px solid var(--border)",
                      background: filterRole === r ? "var(--forest)" : "#FFFFFF",
                      color: filterRole === r ? "#FAF8F5" : "var(--forest)",
                      cursor: "pointer",
                    }}
                  >
                    {r === "ALL" ? "All" : ROLE_META[r]?.label ?? r}
                  </button>
                ))}
              </div>
              <div style={{ maxHeight: 270, overflowY: "auto", padding: 6 }}>
                {filteredUsers.map((u) => {
                  const isSel = u.id === selected?.id;
                  const meta = ROLE_META[u.role];
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(u.id);
                        setOpen(false);
                      }}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 10,
                        padding: "9px 12px",
                        borderRadius: 12,
                        border: "none",
                        background: isSel ? "var(--highlighter-yellow-soft)" : "transparent",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
                        <span
                          className="font-mono"
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            background: meta?.bg ?? "var(--bg-subtle)",
                            color: "var(--forest)",
                            padding: "2px 8px",
                            borderRadius: 9999,
                            border: "1px solid var(--border-strong)",
                            flexShrink: 0,
                          }}
                        >
                          {meta?.label ?? u.role}
                        </span>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: 13, color: "var(--forest)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {u.name}
                          </div>
                          <div style={{ fontSize: 11, color: "var(--forest-muted)", fontFamily: "var(--font-mono)" }}>
                            {u.email}
                          </div>
                        </div>
                      </div>
                      <span className="badge badge-gray" style={{ flexShrink: 0 }}>
                        {u.scope}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            borderRadius: 9999,
            padding: "11px 24px",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Sign In &rarr;
        </button>
      </div>
    </form>
  );
}
