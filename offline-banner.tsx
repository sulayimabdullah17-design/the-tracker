// src/components/OfflineBanner.tsx
import { WifiOff } from "lucide-react";

export function OfflineBanner() {
  const online = useOnlineStatus();

  if (online) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-white 
                 px-4 py-2 flex items-center justify-center gap-2 shadow-lg"
    >
      <WifiOff className="w-4 h-4" />
      <span className="text-sm font-medium">
        لا يوجد اتصال بالإنترنت — التغييرات ستُحفظ محلياً
      </span>
    </div>
  );
}