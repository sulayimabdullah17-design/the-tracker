import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="topbar no-print">
      <div className="workspace px-4 py-2.5 flex flex-wrap items-center gap-x-5 gap-y-3">
        {/* الساعة */}
        <div className="rounded border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-center text-emerald-300 min-w-24">
          {/* ... */}
        </div>

        {/* الشعار */}
        <div className="flex-1 min-w-40">
          <Logo size="md" variant="light" />
        </div>

        {/* أدوات التحكم */}
        <div className="top-controls flex items-center gap-2 flex-wrap">
          {/* ... */}
        </div>
      </div>
    </header>
  );
}