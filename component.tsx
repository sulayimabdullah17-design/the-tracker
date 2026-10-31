useEffect(() => {
  if (!toast) return;
  const id = window.setTimeout(() => setToast(null), 4500);
  return () => window.clearTimeout(id);    // ✅ تنظيف
}, [toast]);