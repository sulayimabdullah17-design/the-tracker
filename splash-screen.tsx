import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

/**
 * شاشة البداية — تظهر عند أول تحميل للتطبيق.
 */
export function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(id);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center 
                 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 
                 transition-opacity duration-500"
      role="status"
      aria-live="polite"
    >
      <Logo size="lg" showText variant="light" className="mb-6" />
      <div className="flex items-center gap-2 text-blue-200 text-sm">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        جاري التحميل...
      </div>
    </div>
  );
}