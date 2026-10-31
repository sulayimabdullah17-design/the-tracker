const addAsset = useCallback((asset: Asset) => {
  setState(prev => ({ ...prev, assets: [...prev.assets, asset] }));
}, []);   // ✅ مرجع ثابت

const updateAsset = useCallback((id: string, patch: Partial<Asset>) => {
  setState(prev => ({
    ...prev,
    assets: prev.assets.map(a => a.id === id ? { ...a, ...patch } : a),
  }));
}, []);   // ✅ مرجع ثابت