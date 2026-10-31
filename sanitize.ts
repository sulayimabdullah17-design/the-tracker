function sanitize(raw: unknown): FleetData | null {
  if (!raw || typeof raw !== "object") return null;
  const data = raw as Partial<FleetData>;
  if (!Array.isArray(data.assets) || !Array.isArray(data.readings)) return null;
  return {
    assets: (data.assets as Asset[]).map(normalizeAsset),
    readings: Array.isArray(data.readings) ? data.readings as Reading[] : [],
    failures: Array.isArray(data.failures) ? data.failures as Failure[] : [],
    plans: Array.isArray(data.plans) ? data.plans as Plan[] : [],
    maintenance: Array.isArray(data.maintenance) ? data.maintenance as Maintenance[] : [],
    phases: Array.isArray(data.phases) ? data.phases as PhaseService[] : [],
    attachments: Array.isArray(data.attachments) ? data.attachments as Attachment[] : [],
  };
}