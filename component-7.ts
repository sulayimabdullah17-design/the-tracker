useEffect(() => {
  if (firstRun.current) { firstRun.current = false; return; }
  const timer = setTimeout(() => {
    try {
      window.localStorage.setItem(STORE_KEY, JSON.stringify({ version, savedAt: Date.now(), data }));
    } catch { /* ... */ }
  }, 250);
  return () => clearTimeout(timer);
}, [data]);