import React from "react";
import Link from "next/link";
import { type LucideIcon, Inbox } from "lucide-react";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  compact?: boolean;
  className?: string;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  action,
  compact = false,
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`empty-state ${compact ? "empty-state-compact" : ""} ${className}`}
      role="status"
      aria-live="polite"
    >
      <div className="empty-state-icon" aria-hidden="true">
        <Icon size={compact ? 22 : 28} strokeWidth={1.8} />
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-desc">{description}</p>
      {action && (
        <div className="empty-state-action">
          {action.href ? (
            <Link href={action.href} className="btn btn-secondary btn-sm">
              {action.label}
            </Link>
          ) : action.onClick ? (
            <button
              type="button"
              onClick={action.onClick}
              className="btn btn-secondary btn-sm"
            >
              {action.label}
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
