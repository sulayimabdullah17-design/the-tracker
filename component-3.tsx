useEffect(() => {
  const ws = new WebSocket(WS_URL);
  ws.onmessage = (e) => handleMessage(JSON.parse(e.data));
  
  return () => {
    ws.onmessage = null;   // ✅ إزالة المعالج
    ws.close();            // ✅ إغلاق الاتصال
  };
}, []);