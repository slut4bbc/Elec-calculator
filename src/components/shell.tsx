import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { FileText, Home, List, Settings } from "lucide-react";
import { toFaDigits } from "@/lib/format";
import { useInvoice } from "@/lib/store";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "خانه", icon: Home },
  { to: "/catalog", label: "فهرست", icon: List },
  { to: "/estimate", label: "فاکتور", icon: FileText },
  { to: "/settings", label: "تنظیمات", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-bg text-fg">
      <div className="mx-auto w-full max-w-2xl pb-28">{children}</div>
      <BottomNav />
    </div>
  );
}

function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const invoice = useInvoice();

  return (
    <nav className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-2xl grid-cols-4 px-2 pb-[env(safe-area-inset-bottom)]">
        {NAV.map((item) => {
          const active =
            item.to === "/"
              ? pathname === "/"
              : pathname === item.to || pathname.startsWith(`${item.to}/`);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex flex-col items-center gap-1 py-3 text-xs transition-colors duration-150",
                active ? "text-primary" : "text-muted",
              )}
            >
              <Icon className="size-5" strokeWidth={active ? 2.2 : 1.75} />
              <span>{item.label}</span>
              {item.to === "/estimate" && invoice.lines.length > 0 ? (
                <span className="absolute start-1/2 top-1.5 ms-3 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium leading-none text-primary-fg tabular-nums">
                  {toFaDigits(invoice.lines.length)}
                </span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className="flex items-start justify-between gap-3 px-5 pt-6 pb-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-fg">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
      </div>
      {action}
    </header>
  );
}
