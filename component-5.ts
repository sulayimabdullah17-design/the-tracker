componentDidCatch(error: Error, info: ErrorInfo) {
  if (import.meta.env.DEV) {
    console.error("[ErrorBoundary]", error, info);
  }
  // في الإنتاج: إرسال إلى خدمة المراقبة فقط
}