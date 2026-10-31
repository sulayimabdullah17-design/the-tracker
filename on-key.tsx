useEffect(() => {
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (confirm) closeConfirm();
      else if (dialog) closeDialog();
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);  // ✅ تنظيف
}, [confirm, dialog]);