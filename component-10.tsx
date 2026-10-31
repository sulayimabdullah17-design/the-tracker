const stats = useMemo(() => ({
  active: assets.filter(a => !a.archived).length,
  operational: assets.filter(a => a.status === "Operational").length,
  overdue: plans.filter(p => p.dueDate < today).length,
  failures: failures.length,
}), [assets, plans, failures, today]);