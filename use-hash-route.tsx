// src/hooks/useHashRoute.ts
export function useHashRoute() {
  const [view, setView] = useState(() => 
    window.location.hash.slice(1) || "dashboard"
  );

  useEffect(() => {
    const handler = () => setView(window.location.hash.slice(1) || "dashboard");
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (next: string) => {
    window.location.hash = next;
  };

  return { view, navigate };
}