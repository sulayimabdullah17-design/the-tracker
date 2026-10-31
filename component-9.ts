const patch = useCallback(<K extends keyof FleetData>(
  key: K, 
  updater: (prev: FleetData[K]) => FleetData[K]
) => {
  setData((prev) => ({ ...prev, [key]: updater(prev[key]) }));
}, []);