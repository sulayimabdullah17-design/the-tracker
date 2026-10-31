export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null);
  
  const notify = useCallback((message: string, type: ToastType = "info") => {
    setToast({ message, type, id: Date.now() });
  }, []);
  
  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 4500);
    return () => clearTimeout(id);
  }, [toast]);
  
  return { toast, notify };
}