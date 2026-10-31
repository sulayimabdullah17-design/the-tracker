useEffect(() => {
  const id = window.setTimeout(() => {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
  }, 300);
  return () => window.clearTimeout(id);    // ✅ تنظيف
}, [state]);