const [saving, setSaving] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (saving) return;              // ✅ منع النقر المزدوج
  setSaving(true);
  try {
    await save();
  } finally {
    setSaving(false);
  }
};