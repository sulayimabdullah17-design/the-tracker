// عند العودة للاتصال
useEffect(() => {
  if (online && pendingChanges.length > 0) {
    syncPendingChanges(pendingChanges);
  }
}, [online, pendingChanges]);