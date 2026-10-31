useEffect(() => {
  const controller = new AbortController();
  
  fetch(`/api/assets`, { signal: controller.signal })
    .then(r => r.json())
    .then(setAssets)
    .catch(err => {
      if (err.name !== "AbortError") setError(err.message);
    });
  
  return () => controller.abort();   // ✅ إلغاء الطلب
}, []);