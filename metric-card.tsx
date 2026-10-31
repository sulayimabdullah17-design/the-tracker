interface MetricCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  accent: string;
}

export function MetricCard({ label, value, icon: Icon, accent }: MetricCardProps) {
  return (
    <article className="card metric-card p-4" style={{ "--accent": accent } as React.CSSProperties}>
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="eyebrow">{label}</span>
        <Icon className="w-5 h-5 metric-icon" />
      </div>
      <div className="metric-value">{value}</div>
    </article>
  );
}