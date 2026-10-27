import React from "react";
import { ShieldCheck, Workflow, FileCheck2, Shield } from "lucide-react";

export function BrandPanel() {
  return (
    <div
      className="login-brand-column select-none"
      style={{
        backgroundImage: `
          radial-gradient(circle at 18% 20%, rgba(49, 95, 232, 0.28) 0%, transparent 55%),
          radial-gradient(circle at 82% 80%, rgba(13, 148, 136, 0.16) 0%, transparent 50%),
          radial-gradient(rgba(216, 224, 236, 0.08) 1.2px, transparent 1.2px)
        `,
        backgroundSize: "100% 100%, 100% 100%, 28px 28px",
      }}
    >
      {/* Strictly contained ambient background glows */}
      <div className="brand-glow-container">
        <div className="brand-glow-1" />
        <div className="brand-glow-2" />
      </div>

      {/* Top Header: Brand & Identity */}
      <div className="brand-header">
        <div className="brand-logo-crest">
          <ShieldCheck style={{ width: 22, height: 22 }} strokeWidth={2.4} />
        </div>
        <div>
          <div className="brand-title-row">
            <span className="brand-name">AIClear</span>
            <span className="brand-badge">Approval Intelligence</span>
          </div>
          <p className="brand-subtitle">
            Statutory Workflow Automation &amp; Compliance Platform
          </p>
        </div>
      </div>

      {/* Middle: Value Proposition & Features */}
      <div className="brand-body">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="brand-sih-tag">
            <span className="brand-sih-dot" />
            <span>SIH26262 · Smart Automation for AICTE</span>
          </div>

          <h1 className="brand-headline">
            Clarity in compliance.
            <br />
            <span className="brand-headline-accent">Confidence in every decision.</span>
          </h1>

          <p className="brand-desc">
            Intelligent approval workflows, evidence-based compliance and accountable regulatory operations for technical education governance.
          </p>
        </div>

        {/* 3 Compact Feature Cards */}
        <div className="brand-features-list">
          <div className="brand-feature-card">
            <div
              className="brand-feature-icon"
              style={{ backgroundColor: "rgba(49, 95, 232, 0.2)", color: "#60A5FA" }}
            >
              <Workflow style={{ width: 17, height: 17 }} />
            </div>
            <div>
              <div className="brand-feature-title">Smart workflows</div>
              <div className="brand-feature-desc">
                Adaptive statutory routing across Scrutiny, EVC inspections &amp; SAC/SHC appellate stages.
              </div>
            </div>
          </div>

          <div className="brand-feature-card">
            <div
              className="brand-feature-icon"
              style={{ backgroundColor: "rgba(13, 148, 136, 0.2)", color: "#2DD4BF" }}
            >
              <FileCheck2 style={{ width: 17, height: 17 }} />
            </div>
            <div>
              <div className="brand-feature-title">Evidence checks</div>
              <div className="brand-feature-desc">
                Automated APH norm calculations, intake divisions, and active lease/NOC expiry surveillance.
              </div>
            </div>
          </div>

          <div className="brand-feature-card">
            <div
              className="brand-feature-icon"
              style={{ backgroundColor: "rgba(99, 102, 241, 0.2)", color: "#A5B4FC" }}
            >
              <Shield style={{ width: 17, height: 17 }} />
            </div>
            <div>
              <div className="brand-feature-title">Audit integrity</div>
              <div className="brand-feature-desc">
                Tamper-evident SHA-256 hash-chained ledger verifying every decision and SLA escalation.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="brand-footer">
        <div>
          <div className="brand-footer-text">AICTE Approval &amp; Compliance Intelligence</div>
          <div className="brand-footer-sub">
            Proposed SIH 2026 Evaluation Prototype · Problem Statement SIH26262
          </div>
        </div>
        <div className="brand-footer-version">v2.4-APH</div>
      </div>
    </div>
  );
}
