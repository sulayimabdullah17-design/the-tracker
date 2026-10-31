// ❌ خطر: كتابة قديمة قد تكتب فوق أحدث
useEffect(() => {
  const id = setTimeout(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, 300);
  return () => clearTimeout(id);
}, [state]);