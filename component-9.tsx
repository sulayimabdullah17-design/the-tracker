const model = useMemo(
  () => buildFleetModel(assets, readings, failures, plans, maintenance, today),
  [assets, readings, failures, plans, maintenance, today]
);