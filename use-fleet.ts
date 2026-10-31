export function useFleet() {
  const [state, setState] = useState<Store>(loadStore);
  
  // كل عمليات الكتابة
  const addAsset = useCallback((asset: Asset) => { /* ... */ }, []);
  const updateAsset = useCallback((id: string, patch: Partial<Asset>) => { /* ... */ }, []);
  const deleteAsset = useCallback((id: string) => { /* ... */ }, []);
  // ... 15+ دالة
  
  // كل الحسابات
  const stats = useMemo(() => { /* ... */ }, [state]);
  const model = useMemo(() => buildFleetModel(state), [state]);
  
  return { ...state, ...actions, stats, model };
}