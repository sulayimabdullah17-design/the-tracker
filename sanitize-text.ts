export function sanitizeText(value: unknown, maxLength = 500): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/[<>]/g, "")                    // منع وسوم HTML
    .replace(/[\u0000-\u001F\u007F]/g, " ")  // إزالة محارف التحكم
    .replace(/\s{2,}/g, " ")                 // توحيد المسافات
    .trim()
    .slice(0, maxLength);                    // حد أقصى للطول
}