/**
 * يبني نموذجاً كاملاً للأسطول مع التنبيهات والتحليلات.
 * 
 * @param store - الحالة الكاملة للتطبيق
 * @param today - التاريخ الحالي بصيغة ISO (YYYY-MM-DD)
 * @returns نموذج يحتوي على التنبيهات والإحصائيات
 * 
 * @example
 * const model = buildFleetModel(store, todayISO());
 * console.log(model.alerts); // التنبيهات النشطة
 */
export function buildFleetModel(store: Store, today: string): FleetModel {
  const alerts: Alert[] = [];
  
  // 1. الصيانة المتأخرة
  store.plans.forEach(plan => {
    if (plan.dueDate < today) {
      alerts.push({
        tone: "warn",
        title: `${plan.title} متأخرة`,
        detail: `كانت مستحقة في ${formatDate(plan.dueDate)}`,
      });
    }
  });
  
  // 2. حرارة المحرك المرتفعة
  const recentReadings = store.readings.filter(
    r => r.date >= dateOffset(-6)
  );
  const hotReadings = recentReadings.filter(r => r.temp !== null && r.temp > 900);
  if (hotReadings.length > 0) {
    alerts.push({
      tone: "bad",
      title: `${hotReadings.length} قراءة حرارة مرتفعة`,
      detail: "تحقق من القراءات الأخيرة",
    });
  }
  
  // 3. ضغط الزيت المنخفض
  const lowOil = recentReadings.filter(r => r.oil !== null && r.oil < 40);
  if (lowOil.length > 0) {
    alerts.push({
      tone: "bad",
      title: `${lowOil.length} قراءة ضغط زيت منخفض`,
      detail: "تحقق من القراءات الأخيرة",
    });
  }
  
  // 4. الأعطال الحرجة
  store.failures
    .filter(f => f.severity === "High" || f.severity === "Critical")
    .forEach(f => {
      alerts.push({
        tone: f.severity === "Critical" ? "bad" : "warn",
        title: `${f.system}: ${f.failureType}`,
        detail: `${f.severity} · ${f.resolution}`,
      });
    });
  
  return { alerts, /* ... */ };
}