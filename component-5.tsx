const deleteReading = useCallback((id: string) => {
  setState(prev => ({
    ...prev,
    readings: prev.readings.filter(r => r.id !== id),
  }));
}, []);