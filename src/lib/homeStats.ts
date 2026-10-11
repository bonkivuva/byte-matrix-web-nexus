export const homeStats = [
  { value: 99.9, prefix: "", suffix: "%", label: "Uptime commitment" },
  { value: 1, prefix: "< ", suffix: "hr", label: "Priority response target" },
  { value: 150, prefix: "", suffix: "+", label: "Enterprise engagements" },
] as const;

export const formatStat = (stat: typeof homeStats[number]) => `${stat.prefix}${stat.value}${stat.suffix}`;