export const TECHNIQUES = [
  {
    id: "myo",
    name: "Myo-reps",
    summary: "Auto-regulating rest-pause sets to accumulate effective reps.",
    protocol: "rest_pause",
    parameters: { activation: 15, miniSet: 3, miniSetMax: 5 },
  },
  {
    id: "cluster",
    name: "Cluster Sets",
    summary: "Short intra-set breaks to preserve power across heavy reps.",
    protocol: "cluster",
    parameters: { repsPerCluster: 2, rest: 20, clusters: 5 },
  },
  // add more…
] as const;
export type Technique = (typeof TECHNIQUES)[number];
