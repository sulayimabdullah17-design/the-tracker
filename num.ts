const num = (raw: string, min: number, max: number, label: string, required = false) => {
  const v = raw.trim();
  if (!v) {
    if (required) throw new Error(`${label} مطلوب.`);
    return null;
  }
  const n = Number(v);
  if (!Number.isFinite(n) || n < min || n > max)
    throw new Error(`${label} يجب أن يكون بين ${min} و ${max}.`);
  return n;
};