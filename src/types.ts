export type Resource = {
  title: string;
  provider: string;
  url: string;
  note: string;
  duration?: string;
  kind: "course" | "guide" | "lab";
  core?: boolean;
};

export type Task = {
  id: string;
  title: string;
  evidence: string;
};

export type RoadmapWeek = {
  week: number;
  phase: "Foundation" | "AI delivery" | "Operations" | "Leadership";
  title: string;
  subtitle: string;
  hours: string;
  goals: string[];
  tasks: Task[];
  resources: Resource[];
};

export type SideQuest = {
  title: string;
  provider: string;
  url: string;
  duration: string;
  note: string;
};
