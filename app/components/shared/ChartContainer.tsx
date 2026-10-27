import React from "react";
import { AlertCircle, BarChart3 } from "lucide-react";
import { EmptyState } from "./EmptyState";

interface ChartContainerProps {
  title: string;
  subtitle?: string;
  badge?: React.ReactNode;
  loading?: boolean;
  error?: string | null;
  isEmpty?: boolean;
  emptyTitle?: string;
  emptyDesc?: string;
  minHeight?: number | string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function ChartContainer({
  title,
  subtitle,
  badge,
  loading = false,
  error = null,
  isEmpty = false,
  emptyTitle = "No data recorded",
  emptyDesc = "Analytics and distribution metrics will populate as applications progress.",
  minHeight = 260,
  children,
  actions,
  className = "",
}: ChartContainerProps) {
  return (
    <div className={`card chart-card ${className}`}>
      <div className="card-header" style={{ marginBottom: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="card-title">{title}</span>
            {badge}
          </div>
          {subtitle && (
            <p style={{ fontSize: 12, color: "var(--aiclear-text-secondary)", marginTop: 2 }}>
              {subtitle}
            </p>
          )}
        </div>
        {actions && <div style={{ display: "flex", gap: 8, alignItems: "center" }}>{actions}</div>}
      </div>

      <div
        className="chart-viewport"
        style={{ minHeight, position: "relative", width: "100%" }}
        aria-busy={loading}
      >
        {loading ? (
          <div className="chart-skeleton-container" style={{ minHeight }}>
            <div className="chart-skeleton-bar" style={{ height: "45%" }} />
            <div className="chart-skeleton-bar" style={{ height: "70%" }} />
            <div className="chart-skeleton-bar" style={{ height: "30%" }} />
            <div className="chart-skeleton-bar" style={{ height: "85%" }} />
            <div className="chart-skeleton-bar" style={{ height: "60%" }} />
          </div>
        ) : error ? (
          <div
            className="chart-error-state"
            style={{
              minHeight,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
              textAlign: "center",
            }}
            role="alert"
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "var(--red-bg)",
                color: "var(--red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <AlertCircle size={22} />
            </div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--aiclear-text-primary)" }}>
              Unable to load chart metrics
            </div>
            <p style={{ fontSize: 12.5, color: "var(--aiclear-text-secondary)", marginTop: 4, maxWidth: 360 }}>
              {error}
            </p>
          </div>
        ) : isEmpty ? (
          <div style={{ minHeight, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <EmptyState
              icon={BarChart3}
              title={emptyTitle}
              description={emptyDesc}
              compact
            />
          </div>
        ) : (
          <div className="chart-content" style={{ width: "100%", height: "100%" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
