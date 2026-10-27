"use client";

import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  Building2,
  UserCheck,
  Scale,
  Crown,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  CheckCircle2,
  Users2,
} from "lucide-react";

export interface DemoUserOption {
  id: string;
  name: string;
  email: string;
  role: string;
  designation?: string | null;
  scope?: string | null;
}

interface LoginFormProps {
  initialUsers: DemoUserOption[];
  onLoginSubmit: (formData: FormData) => Promise<{ ok: boolean; error?: string }>;
}

export function LoginForm({ initialUsers, onLoginSubmit }: LoginFormProps) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedPersonaKey, setSelectedPersonaKey] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllPersonas, setShowAllPersonas] = useState(false);

  // Helper to find specific accounts from seeded database
  const institutionUser =
    initialUsers.find((u) => u.email === "inst.sgsits@demo.aicte") ??
    initialUsers.find((u) => u.role === "INSTITUTION") ?? {
      id: "inst-default",
      name: "SGSITS Indore",
      email: "inst.sgsits@demo.aicte",
      role: "INSTITUTION",
      scope: "SGSITS Indore",
    };

  const regionalOfficerUser =
    initialUsers.find((u) => u.email === "ro.central.alpha@demo.aicte") ??
    initialUsers.find((u) => u.role === "REGIONAL_OFFICER") ?? {
      id: "ro-default",
      name: "RO Central Alpha",
      email: "ro.central.alpha@demo.aicte",
      role: "REGIONAL_OFFICER",
      scope: "Central Region",
    };

  const bureauUser =
    initialUsers.find((u) => u.email === "bo.alpha@demo.aicte") ??
    initialUsers.find((u) => u.role === "BUREAU_OFFICER") ?? {
      id: "bo-default",
      name: "Bureau Officer Alpha",
      email: "bo.alpha@demo.aicte",
      role: "BUREAU_OFFICER",
      scope: "Central Bureau",
    };

  const bureauHeadUser =
    initialUsers.find((u) => u.email === "bo.beta@demo.aicte") ??
    initialUsers.find((u) => u.role === "ADMIN") ?? {
      id: "bo-head-default",
      name: "Senior Bureau Officer Beta",
      email: "bo.beta@demo.aicte",
      role: "BUREAU_OFFICER",
      scope: "Bureau Oversight",
    };

  // Additional roles in the system
  const evcUser = initialUsers.find((u) => u.role === "EVC_COMMITTEE");
  const sacUser = initialUsers.find((u) => u.role === "SAC_SHC_MEMBER");
  const adminUser = initialUsers.find((u) => u.role === "ADMIN");

  const corePersonas = [
    {
      key: "institution",
      label: "Institution",
      desc: "Submit & track",
      icon: Building2,
      account: institutionUser,
    },
    {
      key: "regional_officer",
      label: "Regional Officer",
      desc: "Scrutiny & EVC",
      icon: UserCheck,
      account: regionalOfficerUser,
    },
    {
      key: "regulation_bureau",
      label: "Regulation Bureau",
      desc: "Compliance review",
      icon: Scale,
      account: bureauUser,
    },
    {
      key: "bureau_head",
      label: "Bureau Head",
      desc: "Oversight & escalation",
      icon: Crown,
      account: bureauHeadUser,
    },
  ];

  const handleSelectPersona = (personaKey: string, account: DemoUserOption, label: string) => {
    setSelectedPersonaKey(personaKey);
    setIdentifier(account.email);
    setPassword("demo2026");
    setErrorMessage(null);
    setStatusMessage(`${label} demo selected · Ready to sign in`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim()) {
      setErrorMessage("Please enter your official username or email.");
      return;
    }
    if (!password.trim()) {
      setErrorMessage("Please enter your password.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.set("identifier", identifier.trim());
      formData.set("password", password.trim());

      const result = await onLoginSubmit(formData);
      if (!result.ok) {
        setErrorMessage(result.error || "Authentication failed. Please verify credentials.");
        setIsLoading(false);
      } else {
        window.location.href = "/dashboard";
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected login error occurred";
      setErrorMessage(msg);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-card-wrapper">
      {/* Main Elevated Login Card */}
      <div className="aiclear-card aiclear-fade-in">
        {/* Card Header */}
        <div className="login-card-header">
          <h2 className="login-card-title">Welcome back</h2>
          <p className="login-card-subtitle">Sign in to your secure workspace.</p>
        </div>

        {/* Error Alert Banner */}
        {errorMessage && (
          <div role="alert" className="login-alert-error">
            <AlertCircle style={{ width: 16, height: 16, flexShrink: 0, marginTop: 1, color: "#DC2626" }} />
            <div style={{ flex: 1 }}>
              <span style={{ fontWeight: 700, display: "block" }}>Authentication Error</span>
              <p style={{ marginTop: 2, lineHeight: 1.4 }}>{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Selected Persona Autofill Indicator */}
        {statusMessage && !errorMessage && (
          <div role="status" className="login-alert-status">
            <CheckCircle2 style={{ width: 15, height: 15, flexShrink: 0, color: "#315FE8" }} />
            <p style={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {statusMessage}
            </p>
          </div>
        )}

        {/* Primary Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Username / Email Field */}
          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="identifier" className="login-label">
                Official username or email
              </label>
            </div>
            <div className="aiclear-input-group">
              <User style={{ width: 16, height: 16, color: "#64748B", flexShrink: 0 }} />
              <input
                id="identifier"
                name="identifier"
                type="text"
                autoComplete="username"
                required
                value={identifier}
                onChange={(e) => {
                  setIdentifier(e.target.value);
                  setSelectedPersonaKey(null);
                }}
                placeholder="e.g. ro.central.alpha@demo.aicte"
                className="aiclear-input"
              />
            </div>
          </div>

          {/* Password Field with Show/Hide Toggle */}
          <div className="login-field">
            <div className="login-label-row">
              <label htmlFor="password" className="login-label">
                Password
              </label>
              <span className="login-hint">
                Demo: <strong>demo2026</strong>
              </span>
            </div>
            <div className="aiclear-input-group">
              <Lock style={{ width: 16, height: 16, color: "#64748B", flexShrink: 0 }} />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="aiclear-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="pw-toggle-btn"
              >
                {showPassword ? (
                  <EyeOff style={{ width: 16, height: 16 }} />
                ) : (
                  <Eye style={{ width: 16, height: 16 }} />
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <button type="submit" disabled={isLoading} className="aiclear-btn-primary">
            {isLoading ? (
              <>
                <Loader2 style={{ width: 16, height: 16 }} className="animate-spin" />
                <span>Signing in to AIClear...</span>
              </>
            ) : (
              <>
                <span>Sign in to AIClear</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </>
            )}
          </button>
        </form>

        {/* Evaluation Personas Section */}
        <div className="persona-section">
          <div className="persona-section-header">
            <span className="persona-section-title">Evaluation personas</span>
            <span className="persona-section-pill">One-click autofill</span>
          </div>

          {/* 4 Required Persona Cards Grid */}
          <div className="persona-grid">
            {corePersonas.map((persona) => {
              const IconComponent = persona.icon;
              const isSelected = selectedPersonaKey === persona.key;

              return (
                <button
                  key={persona.key}
                  type="button"
                  onClick={() => handleSelectPersona(persona.key, persona.account, persona.label)}
                  className={`aiclear-persona-card ${isSelected ? "selected" : ""}`}
                  aria-pressed={isSelected}
                >
                  <div className="persona-top-row">
                    <div className="persona-icon-box">
                      <IconComponent style={{ width: 15, height: 15 }} />
                    </div>
                    {isSelected && <span className="persona-selected-dot" />}
                  </div>
                  <div>
                    <div className="persona-card-name">{persona.label}</div>
                    <div className="persona-card-desc">{persona.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Expandable Secondary Roles Drawer (Preserves EVC, SAC, Admin) */}
          <div>
            <button
              type="button"
              onClick={() => setShowAllPersonas(!showAllPersonas)}
              className="more-roles-toggle"
              aria-expanded={showAllPersonas}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Users2 style={{ width: 14, height: 14, color: "var(--primary)" }} />
                <span>More roles (EVC, SAC/SHC, Admin)</span>
              </div>
              {showAllPersonas ? (
                <ChevronUp style={{ width: 14, height: 14 }} />
              ) : (
                <ChevronDown style={{ width: 14, height: 14 }} />
              )}
            </button>

            {showAllPersonas && (
              <div className="secondary-roles-drawer">
                {evcUser && (
                  <button
                    type="button"
                    onClick={() => handleSelectPersona("evc", evcUser, "EVC Committee")}
                    className={`secondary-role-card ${selectedPersonaKey === "evc" ? "selected" : ""}`}
                    aria-pressed={selectedPersonaKey === "evc"}
                  >
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--forest)", display: "block" }}>
                        EVC Committee Member
                      </span>
                      <span style={{ fontSize: 10.5, color: "var(--forest-muted)" }}>
                        Campus inspection &amp; report verification
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9.5,
                        fontWeight: 700,
                        color: "#0D9488",
                        backgroundColor: "#F0FDFA",
                        border: "1px solid #99F6E4",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      EVC
                    </span>
                  </button>
                )}

                {sacUser && (
                  <button
                    type="button"
                    onClick={() => handleSelectPersona("sac", sacUser, "SAC / SHC Member")}
                    className={`secondary-role-card ${selectedPersonaKey === "sac" ? "selected" : ""}`}
                    aria-pressed={selectedPersonaKey === "sac"}
                  >
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--forest)", display: "block" }}>
                        SAC / SHC Member
                      </span>
                      <span style={{ fontSize: 10.5, color: "var(--forest-muted)" }}>
                        Standing Hearing Committee docket
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9.5,
                        fontWeight: 700,
                        color: "#6366F1",
                        backgroundColor: "#EEF2FF",
                        border: "1px solid #C7D2FE",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      SAC/SHC
                    </span>
                  </button>
                )}

                {adminUser && (
                  <button
                    type="button"
                    onClick={() => handleSelectPersona("admin", adminUser, "System Admin")}
                    className={`secondary-role-card ${selectedPersonaKey === "admin" ? "selected" : ""}`}
                    aria-pressed={selectedPersonaKey === "admin"}
                  >
                    <div>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--forest)", display: "block" }}>
                        System Administrator
                      </span>
                      <span style={{ fontSize: 10.5, color: "var(--forest-muted)" }}>
                        Clock simulation, rules &amp; audit check
                      </span>
                    </div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 9.5,
                        fontWeight: 700,
                        color: "#D97706",
                        backgroundColor: "#FEF3C7",
                        border: "1px solid #FDE68A",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      ADMIN
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Security & Regulatory Footnote */}
        <div className="login-security-footer">
          <Lock style={{ width: 12, height: 12, color: "var(--green)" }} />
          <span>Encrypted Session · Immutable SHA-256 Audit Trail</span>
        </div>
      </div>
    </div>
  );
}
