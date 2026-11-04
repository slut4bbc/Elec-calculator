import { Minus, Plus } from "lucide-react";
import { toFaDigits } from "@/lib/format";
import { cn } from "@/lib/utils";

export function QtyStepper({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (n: number) => void;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        aria-label="کاهش"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="flex size-11 items-center justify-center rounded-md bg-surface-2 text-fg transition-[background-color,transform] duration-150 hover:bg-border active:scale-95"
      >
        <Minus className="size-4" />
      </button>
      <span className="min-w-8 text-center text-sm font-medium tabular-nums">
        {toFaDigits(value)}
      </span>
      <button
        type="button"
        aria-label="افزایش"
        onClick={() => onChange(value + 1)}
        className="flex size-11 items-center justify-center rounded-md bg-primary text-primary-fg transition-[opacity,transform] duration-150 hover:opacity-90 active:scale-95"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
