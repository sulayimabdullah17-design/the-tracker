export function ReportsView() {
  return (
    <article className="card p-8">
      {/* رأس التقرير مع الشعار */}
      <header className="flex items-center justify-between border-b pb-4 mb-6">
        <Logo size="md" showText variant="dark" />
        <div className="text-right text-xs text-slate-500">
          <div>تقرير رسمي</div>
          <div>{new Date().toLocaleDateString("ar-SA")}</div>
        </div>
      </header>
      
      {/* محتوى التقرير */}
      {/* ... */}
    </article>
  );
}