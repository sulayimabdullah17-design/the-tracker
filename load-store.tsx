// lib/storage.ts — طبقة البيانات
export function loadStore(): Store {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : DEFAULT_STORE;
}

// lib/predict.ts — طبقة منطق العمليات
export function findOverduePlans(plans: Plan[], today: string): Plan[] {
  return plans.filter(p => p.dueDate < today);
}

// hooks/useFleet.ts — طبقة الحالة
export function useFleet() {
  const [state, setState] = useState(loadStore);
  const overdue = useMemo(
    () => findOverduePlans(state.plans, todayISO()),
    [state.plans]
  );
  return { ...state, overdue };
}

// components/views/DashboardView.tsx — طبقة العرض
function DashboardView() {
  const { assets, overdue } = useFleet();
  return <div>{/* عرض فقط */}</div>;
}