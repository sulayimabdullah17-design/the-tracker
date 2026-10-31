// Map للبحث السريع O(1) بدل find المتكرر O(n)
const assetIndex = useMemo(
  () => new Map(data.assets.map((a) => [a.id, a])),
  [data.assets]
);

// حساب المشتقات مرة واحدة
const activeAssets = useMemo(
  () => data.assets.filter((a) => !a.archived),
  [data.assets]
);

// نموذج التنبؤ يُحسب فقط عند تغير البيانات
const model = useMemo(
  () => buildFleetModel(fleet.assets, fleet.readings, fleet.failures, 
                        fleet.plans, fleet.maintenance, fleet.todayISO()),
  [fleet.assets, fleet.readings, fleet.failures, fleet.plans, fleet.maintenance]
);