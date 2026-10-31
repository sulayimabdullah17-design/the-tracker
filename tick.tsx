useEffect(() => {
  const tick = () => setNow(new Date());
  tick();
  const id = window.setInterval(tick, 60_000);
  return () => window.clearInterval(id);   // ✅ تنظيف
}, []);