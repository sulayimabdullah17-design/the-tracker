export default function App() {
  return (
    <ErrorBoundary>
      <OfflineBanner />
      <AppShell />
    </ErrorBoundary>
  );
}