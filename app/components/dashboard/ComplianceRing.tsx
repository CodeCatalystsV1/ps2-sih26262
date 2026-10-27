"use client";

import React, { useEffect, useState } from "react";

interface ComplianceRingProps {
  score: number;
  label: "HEALTHY" | "AT RISK" | "CRITICAL" | string;
  aphScore?: number;
  docsScore?: number;
  undertakingsScore?: number;
}

export function ComplianceRing({
  score,
  label,
  aphScore,
  docsScore,
  undertakingsScore,
}: ComplianceRingProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  // SVG ring geometry
  const radius = 42;
  const circumference = 2 * Math.PI * radius; // ~263.89

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setAnimatedScore(score);
      setHasMounted(true);
      return;
    }

    setHasMounted(true);

    // Number count-up animation over 800ms
    const duration = 800;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedScore(Math.round(eased * score));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [score]);

  // Determine semantic color based on compliance thresholds
  const strokeColor =
    label === "HEALTHY" ? "#0D9488" : label === "AT RISK" ? "#F59E0B" : "#DC2626";

  const badgeClass =
    label === "HEALTHY"
      ? "badge-green"
      : label === "AT RISK"
        ? "badge-amber"
        : "badge-red";

  const strokeDashoffset = hasMounted
    ? circumference - (score / 100) * circumference
    : circumference;

  return (
    <div
      className="card compliance-card"
      style={{
        marginBottom: 18,
        borderRadius: 16,
        padding: "24px 28px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: 260 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--primary, #EA580C)",
              }}
            />
            <h2 className="card-title" style={{ margin: 0, fontSize: 18 }}>
              Institution Compliance Index
            </h2>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted, #64748B)",
              marginTop: 6,
              lineHeight: 1.5,
              maxWidth: 480,
            }}
          >
            Composite statutory index weighted from AICTE Approval Process Handbook (APH)
            norms, document & lease validity, and conditional undertakings.
          </p>

          <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 10 }}>
            <span className={`badge ${badgeClass}`} style={{ fontSize: 12, padding: "4px 12px" }}>
              {label === "HEALTHY" ? "Healthy (Audit Pass)" : label === "AT RISK" ? "At Risk (Inspection Due)" : "Critical Deficiency"}
            </span>
            <span style={{ fontSize: 12, color: "var(--text-muted, #64748B)" }}>
              Updated real-time from active dockets
            </span>
          </div>
        </div>

        {/* Circular Progress Ring with Score */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            flexShrink: 0,
            background: "linear-gradient(135deg, rgba(255, 247, 237, 0.75) 0%, rgba(255, 255, 255, 0.85) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            padding: "14px 22px",
            borderRadius: 18,
            border: "1.5px solid rgba(234, 88, 12, 0.2)",
            boxShadow: "0 4px 16px rgba(234, 88, 12, 0.08)",
          }}
        >
          <div style={{ position: "relative", width: 96, height: 96 }}>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              style={{ transform: "rotate(-90deg)" }}
              aria-hidden="true"
            >
              {/* Background track circle */}
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="7"
              />
              {/* Animated Progress circle */}
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                stroke={strokeColor}
                strokeWidth="7.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transition: "stroke-dashoffset 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </svg>
            {/* Centered Score */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 26,
                  fontWeight: 900,
                  color: strokeColor,
                  letterSpacing: "-0.03em",
                }}
              >
                {animatedScore}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "var(--text-muted, #64748B)",
                  marginTop: 2,
                }}
              >
                / 100
              </span>
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--primary, #EA580C)",
              }}
            >
              Compliance Status
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 800,
                color: "var(--text, #172033)",
                marginTop: 2,
              }}
            >
              {score >= 75 ? "Compliant" : score >= 50 ? "Caution Needed" : "Action Required"}
            </div>
            <div style={{ fontSize: 11.5, color: "var(--text-muted, #64748B)", marginTop: 2 }}>
              Target benchmark: &ge; 75/100
            </div>
          </div>
        </div>
      </div>

      {/* Sub-scores breakdown */}
      {(aphScore !== undefined || docsScore !== undefined || undertakingsScore !== undefined) && (
        <div
          className="grid-3"
          style={{
            marginTop: 20,
            paddingTop: 18,
            borderTop: "1px solid var(--border)",
            gap: 14,
          }}
        >
          <div
            className="stat-card"
            style={{
              padding: "14px 18px",
              background: "#F8FAFC",
              border: "1px solid var(--border)",
              borderRadius: 14,
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--text-muted, #64748B)",
                  textTransform: "uppercase",
                }}
              >
                APH Norms
              </span>
              <span className="font-mono" style={{ fontWeight: 800, fontSize: 15, color: "var(--text, #172033)" }}>
                {aphScore ?? 0}/100
              </span>
            </div>
            <div
              style={{
                height: 5,
                background: "#E2E8F0",
                borderRadius: 9999,
                overflow: "hidden",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: `${aphScore ?? 0}%`,
                  height: "100%",
                  background: (aphScore ?? 0) >= 75 ? "#0D9488" : "#EA580C",
                  borderRadius: 9999,
                  transition: "width 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>

          <div
            className="stat-card"
            style={{
              padding: "14px 18px",
              background: "#F8FAFC",
              border: "1px solid var(--border)",
              borderRadius: 14,
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--text-muted, #64748B)",
                  textTransform: "uppercase",
                }}
              >
                Document Validity
              </span>
              <span className="font-mono" style={{ fontWeight: 800, fontSize: 15, color: "var(--text, #172033)" }}>
                {docsScore ?? 0}/100
              </span>
            </div>
            <div
              style={{
                height: 5,
                background: "#E2E8F0",
                borderRadius: 9999,
                overflow: "hidden",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: `${docsScore ?? 0}%`,
                  height: "100%",
                  background: (docsScore ?? 0) >= 75 ? "#0D9488" : "#EA580C",
                  borderRadius: 9999,
                  transition: "width 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>

          <div
            className="stat-card"
            style={{
              padding: "14px 18px",
              background: "#F8FAFC",
              border: "1px solid var(--border)",
              borderRadius: 14,
              transition: "transform 200ms ease, box-shadow 200ms ease",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  color: "var(--text-muted, #64748B)",
                  textTransform: "uppercase",
                }}
              >
                Undertakings
              </span>
              <span className="font-mono" style={{ fontWeight: 800, fontSize: 15, color: "var(--text, #172033)" }}>
                {undertakingsScore ?? 0}/100
              </span>
            </div>
            <div
              style={{
                height: 5,
                background: "#E2E8F0",
                borderRadius: 9999,
                overflow: "hidden",
                marginTop: 8,
              }}
            >
              <div
                style={{
                  width: `${undertakingsScore ?? 0}%`,
                  height: "100%",
                  background: (undertakingsScore ?? 0) >= 75 ? "#0D9488" : "#EA580C",
                  borderRadius: 9999,
                  transition: "width 900ms cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
