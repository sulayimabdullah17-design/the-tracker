<ErrorBoundary>                          {/* المستوى 1: التطبيق كامل */}
  <Header />
  <ErrorBoundary>                        {/* المستوى 2: التنقل */}
    <Navigation />
  </ErrorBoundary>
  <main>
    <ErrorBoundary>                      {/* المستوى 3: كل تبويب */}
      {view === "dashboard" && <DashboardView />}
    </ErrorBoundary>
    <ErrorBoundary>
      {view === "fleet" && <FleetView />}
    </ErrorBoundary>
    {/* ... */}
  </main>
</ErrorBoundary>