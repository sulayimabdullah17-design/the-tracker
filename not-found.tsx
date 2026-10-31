import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-slate-50 px-6 text-center">
      <Logo size="lg" showText variant="dark" className="mb-8" />
      
      <div className="text-7xl font-bold text-blue-900 mb-4">404</div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">
        الصفحة غير موجودة
      </h1>
      <p className="text-slate-500 mb-8 max-w-md">
        الرابط الذي تحاول الوصول إليه غير صحيح أو تم نقله.
      </p>
      
      <Button onClick={() => (window.location.hash = "dashboard")}>
        العودة للرئيسية
      </Button>
    </div>
  );
}