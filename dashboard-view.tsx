function DashboardView() {
  const [assets, setAssets] = useState([]);
  
  useEffect(() => {
    const raw = localStorage.getItem("fleet");
    const data = JSON.parse(raw);
    const overdue = data.plans.filter(p => 
      new Date(p.dueDate) < new Date()
    );
    setAssets(data.assets);
  }, []);
  
  return <div>{/* ... */}</div>;
}