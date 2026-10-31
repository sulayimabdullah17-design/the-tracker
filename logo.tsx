import { cn } from "@/lib/utils";

interface LogoProps {
  /** حجم الشعار */
  size?: "sm" | "md" | "lg" | "xl";
  /** إظهار النص بجانب الشعار */
  showText?: boolean;
  /** النسخة الداكنة (للخلفيات الفاتحة) أو الفاتحة (للخلفيات الداكنة) */
  variant?: "light" | "dark";
  /** فئات إضافية */
  className?: string;
}

const SIZES = {
  sm: { img: "h-7 w-7", title: "text-sm", caption: "text-[9px]" },
  md: { img: "h-9 w-9", title: "text-base", caption: "text-[10px]" },
  lg: { img: "h-12 w-12", title: "text-xl", caption: "text-xs" },
  xl: { img: "h-16 w-16", title: "text-2xl", caption: "text-sm" },
} as const;

/**
 * الشعار الرسمي للتطبيق — THE TRACKER.
 *
 * يجمع بين الدرع (الحماية) والطائرة (الأسطول) وحلقات الرادار (التتبع).
 *
 * @example
 * <Logo size="md" showText variant="light" />
 */
export function Logo({
  size = "md",
  showText = true,
  variant = "light",
  className,
}: LogoProps) {
  const s = SIZES[size];
  const markSrc = "/logo-mark.svg";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src={markSrc}
        alt="شعار THE TRACKER"
        className={cn(s.img, "shrink-0 object-contain")}
        width={48}
        height={48}
        loading="eager"
        decoding="async"
      />
      {showText && (
        <div className="leading-tight">
          <div
            className={cn(
              s.title,
              "font-bold tracking-tight",
              variant === "light" ? "text-white" : "text-slate-900"
            )}
          >
            THE TRACKER
          </div>
          <div
            className={cn(
              s.caption,
              "font-semibold uppercase tracking-widest",
              variant === "light" ? "text-cyan-300" : "text-cyan-700"
            )}
          >
            Asset &amp; Maintenance
          </div>
        </div>
      )}
    </div>
  );
}