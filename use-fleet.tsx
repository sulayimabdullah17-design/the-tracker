export function useFleet() {
  const [state, setState] = useState<Store>(loadInitial);
  
  // كل التحديثات تمر عبر setState
  const addAsset = useCallback((asset: Asset) => {
    setState(prev => ({ ...prev, assets: [...prev.assets, asset] }));
  }, []);
  
  const updateAsset = useCallback((id: string, patch: Partial<Asset>) => {
    setState(prev => ({
      ...prev,
      assets: prev.assets.map(a => a.id === id ? { ...a, ...patch } : a),
    }));
  }, []);
  
  return { ...state, addAsset, updateAsset, ... };
}