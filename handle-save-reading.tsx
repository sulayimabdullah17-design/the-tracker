const handleSaveReading = () => {
  try {
    fleet.addReading(record);
    trackEvent("data", "reading_saved", record.assetId);
    notify("تم الحفظ بنجاح");
  } catch (e) {
    trackEvent("data", "reading_save_failed");
    setError("فشل الحفظ");
  }
};