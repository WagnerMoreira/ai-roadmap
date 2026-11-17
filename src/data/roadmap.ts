import type { RoadmapWeek, SideQuest } from "../types";

export const roadmap: RoadmapWeek[] = [
  {
    week: 1,
    phase: "Foundation",
    title: "Map the software delivery system",
    subtitle: "See the SDLC as a flow of decisions, evidence, and handoffs.",
    hours: "6–7 hours",
    goals: [
      "Explain how an idea moves through discovery, delivery, release, and operations.",
      "Identify owners, dependencies, gates, risks, and feedback loops.",
      "Turn an ambiguous request into a testable delivery brief.",
    ],
    tasks: [
      { id: "w1-flow", title: "Draw the current-state SDLC for a product you know", evidence: "One-page flow with owners and handoffs" },
      { id: "w1-brief", title: "Write a delivery brief with scope, assumptions, and acceptance criteria", evidence: "A review-ready brief" },
      { id: "w1-risk", title: "Create a dependency and risk register", evidence: "Five ranked risks with owners" },
      { id: "w1-capstone", title: "Choose the capstone product and define its first outcome", evidence: "Capstone charter" },
    ],
    resources: [
      { title: "Introduction to GitHub", provider: "GitHub Skills", url: "https://github.com/skills/introduction-to-github", note: "Use the lab to observe issues, branches, commits, and pull requests as one delivery system.", kind: "lab" },
      { title: "Software Development Lifecycle", provider: "Atlassian", url: "https://www.atlassian.com/agile/software-development/sdlc", note: "A concise reference for comparing lifecycle models and stages.", kind: "guide" },
    ],
  },
  {
    week: 2,
    phase: "Foundation",
    title: "Read Git and CI/CD as a manager",
    subtitle: "Follow the evidence in commits, pull requests, checks, and pipelines.",
    hours: "6–8 hours",
    goals: [
      "Read branch, commit, and pull request history without writing production code.",
      "Explain what a CI pipeline checks and why a gate failed.",
      "Design a lightweight pull request policy that protects flow and quality.",
    ],
    tasks: [
      { id: "w2-pr", title: "Open, review, and merge a practice pull request", evidence: "Merged PR with a clear review note" },
      { id: "w2-actions", title: "Run a basic GitHub Actions workflow", evidence: "Passing workflow run" },
      { id: "w2-policy", title: "Write a pull request and branch protection policy", evidence: "One-page policy" },
      { id: "w2-debug", title: "Triage one intentionally failed check", evidence: "Short cause and owner note" },
    ],
    resources: [
      { title: "Review pull requests", provider: "GitHub Skills", url: "https://github.com/skills/review-pull-requests", note: "Practice the review flow in a safe repository.", kind: "lab" },
      { title: "Hello GitHub Actions", provider: "GitHub Skills", url: "https://github.com/skills/hello-github-actions", note: "Build and inspect a small automated workflow.", kind: "lab" },
      { title: "Git and GitHub Roadmap", provider: "roadmap.sh", url: "https://roadmap.sh/git-github", note: "Use as a visual reference for branches, commits, pull requests, and collaboration concepts.", kind: "guide" },
    ],
  },
  {
    week: 3,
    phase: "Foundation",
    title: "Plan safe releases",
    subtitle: "Make readiness, rollout, rollback, and incident ownership explicit.",
    hours: "6–7 hours",
    goals: [
      "Separate deployment from release and explain common rollout strategies.",
      "Define release gates using product, quality, security, and operational evidence.",
      "Coordinate rollback and incident communication under time pressure.",
    ],
    tasks: [
      { id: "w3-checklist", title: "Build a release-readiness checklist", evidence: "Checklist with named decision owners" },
      { id: "w3-rollout", title: "Compare canary, blue-green, and feature-flag rollouts", evidence: "One-page decision record" },
      { id: "w3-game", title: "Run a tabletop failed-release exercise", evidence: "Timeline, decisions, and follow-ups" },
      { id: "w3-capstone", title: "Add a release plan to the capstone", evidence: "Rollout and rollback plan" },
    ],
    resources: [
      { title: "Canarying Releases", provider: "Google SRE", url: "https://sre.google/workbook/canarying-releases/", note: "Learn how gradual exposure and representative metrics reduce release risk.", kind: "guide" },
      { title: "Incident Response", provider: "Google SRE", url: "https://sre.google/sre-book/managing-incidents/", note: "Study roles, coordination, communication, and post-incident learning.", kind: "guide" },
    ],
  },
  {
    week: 4,
    phase: "AI delivery",
    title: "Give AI agents usable work",
    subtitle: "Replace vague prompting with bounded tasks, context, examples, and checks.",
    hours: "7–8 hours",
    goals: [
      "Write prompts that define the role, context, constraints, output, and evaluation method.",
      "Break a feature into agent-sized tasks with clear stop conditions.",
      "Review AI output for unsupported claims, scope drift, and missing edge cases.",
    ],
    tasks: [
      { id: "w4-course", title: "Complete Practical Prompt Engineering", evidence: "Course notes and three reusable prompt patterns" },
      { id: "w4-ticket", title: "Rewrite a vague ticket as an agent-ready task", evidence: "Before-and-after ticket" },
      { id: "w4-eval", title: "Create a five-point output review checklist", evidence: "Checklist tested on two outputs" },
      { id: "w4-capstone", title: "Ask an AI agent to draft the capstone backlog", evidence: "Reviewed and corrected backlog" },
    ],
    resources: [
      { title: "Practical Prompt Engineering", provider: "Master.dev", url: "https://master.dev/courses/prompt-engineering/", note: "Core course. Focus on context, examples, structured outputs, planning, and review.", duration: "3h 43m", kind: "course", core: true },
      { title: "Prompt Engineering Roadmap", provider: "roadmap.sh", url: "https://roadmap.sh/prompt-engineering", note: "Skim the prompting techniques, reliability practices, evaluation, versioning, and cost sections.", kind: "guide" },
    ],
  },
  {
    week: 5,
    phase: "AI delivery",
    title: "Understand agent systems",
    subtitle: "Know what an agent can do, where it fails, and when a human must decide.",
    hours: "8–10 hours",
    goals: [
      "Explain agent loops, tool calls, context windows, evaluations, and approval gates.",
      "Recognize how tool schemas, memory, and agent architecture affect reliability.",
      "Match autonomy to task risk and reversibility.",
      "Recognize when an agent is stuck, under-specified, or using the wrong tool.",
    ],
    tasks: [
      { id: "w5-course", title: "Complete the conceptual sections of AI Agents Fundamentals v2", evidence: "System map and glossary" },
      { id: "w5-matrix", title: "Build an autonomy and approval matrix", evidence: "Risk tiers for ten example tasks" },
      { id: "w5-observe", title: "Observe one agent task and annotate its loop", evidence: "Decision-by-decision trace" },
      { id: "w5-capstone", title: "Define agent permissions for the capstone", evidence: "Tool and approval policy" },
    ],
    resources: [
      { title: "AI Agents Fundamentals, v2", provider: "Master.dev", url: "https://master.dev/courses/ai-agents/", note: "Core course. Coding exercises are optional. Prioritize loops, tools, evals, context, and human approval.", duration: "7h 10m", kind: "course", core: true },
      { title: "AI Agents Roadmap", provider: "roadmap.sh", url: "https://roadmap.sh/ai-agents", note: "Use as a visual index. Prioritize agent loops, tools, memory, architecture, evaluation, observability, and permissions.", kind: "guide" },
    ],
  },
  {
    week: 6,
    phase: "AI delivery",
    title: "Build a quality system for AI-assisted delivery",
    subtitle: "Turn quality into layered evidence rather than one final test phase.",
    hours: "6–8 hours",
    goals: [
      "Design a test strategy across unit, integration, end-to-end, exploratory, and acceptance testing.",
      "Add AI-specific checks for correctness, consistency, security, and traceability.",
      "Define which failures block a merge, a deployment, or a release.",
    ],
    tasks: [
      { id: "w6-strategy", title: "Create a risk-based test strategy", evidence: "Test levels mapped to product risks" },
      { id: "w6-cases", title: "Use AI to draft test cases, then audit them", evidence: "Reviewed cases with gaps marked" },
      { id: "w6-gates", title: "Set merge, deployment, and release quality gates", evidence: "Three-tier gate table" },
      { id: "w6-capstone", title: "Add acceptance tests and an AI-output eval to the capstone", evidence: "Passing criteria and sample results" },
    ],
    resources: [
      { title: "Introduction to software testing", provider: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/modules/introduction-to-software-testing/", note: "Use this to structure the test plan and quality vocabulary.", kind: "course" },
      { title: "OWASP Top 10 for LLM Applications", provider: "OWASP", url: "https://genai.owasp.org/llm-top-10/", note: "Use the risk list to add abuse, data, and agent checks.", kind: "guide" },
    ],
  },
  {
    week: 7,
    phase: "Operations",
    title: "Operate an AI factory",
    subtitle: "Coordinate a queue of agent work with cost, context, review, and recovery controls.",
    hours: "7–9 hours",
    goals: [
      "Choose between a fixed workflow, a single agent, and multiple agents.",
      "Track work in progress, context quality, traces, review load, failure rate, and cost.",
      "Design recovery paths for timeouts, partial work, bad output, and tool failure.",
    ],
    tasks: [
      { id: "w7-course", title: "Complete Practical AI Agent Workflows", evidence: "Workflow decision scorecard" },
      { id: "w7-board", title: "Design an AI work operations board", evidence: "Queue states, limits, and exception lanes" },
      { id: "w7-runbook", title: "Write an agent failure runbook", evidence: "Four failure modes with recovery steps" },
      { id: "w7-capstone", title: "Run one capstone feature through the workflow", evidence: "Trace from ticket to reviewed output" },
    ],
    resources: [
      { title: "Practical AI Agent Workflows", provider: "Master.dev", url: "https://master.dev/workshops/practical-agents/", note: "Core course. Use its context, reliability, and cost scorecard when selecting a workflow.", duration: "4h 25m", kind: "course", core: true },
    ],
  },
  {
    week: 8,
    phase: "Operations",
    title: "Set governance that teams can use",
    subtitle: "Translate AI risk into ownership, evidence, and proportionate controls.",
    hours: "6–7 hours",
    goals: [
      "Classify AI use cases by impact, data sensitivity, and autonomy.",
      "Define approval, logging, access, retention, and review requirements by risk tier.",
      "Create a lightweight exception process that does not hide risk.",
    ],
    tasks: [
      { id: "w8-inventory", title: "Create an AI use-case inventory", evidence: "Owners, data, tools, and impact recorded" },
      { id: "w8-tier", title: "Build a three-tier AI risk model", evidence: "Controls mapped to each tier" },
      { id: "w8-review", title: "Run a governance review on the capstone", evidence: "Decision log with required controls" },
      { id: "w8-policy", title: "Write a one-page acceptable-use policy", evidence: "Short policy a team can follow" },
    ],
    resources: [
      { title: "AI Risk Management Framework", provider: "NIST", url: "https://www.nist.gov/itl/ai-risk-management-framework", note: "Use Govern, Map, Measure, and Manage to structure controls and ownership.", kind: "guide" },
      { title: "Generative AI Security", provider: "OWASP", url: "https://genai.owasp.org/", note: "Connect technical risks to specific review and security controls.", kind: "guide" },
      { title: "AI Red Teaming Roadmap", provider: "roadmap.sh", url: "https://roadmap.sh/ai-red-teaming", note: "Use the sections on prompt injection, data privacy, permissions, guardrails, and safety testing.", kind: "guide" },
    ],
  },
  {
    week: 9,
    phase: "Leadership",
    title: "Measure flow with DORA metrics",
    subtitle: "Use delivery data to find constraints without turning metrics into quotas.",
    hours: "6–7 hours",
    goals: [
      "Define deployment frequency, lead time, change fail rate, recovery time, and reliability.",
      "Read metrics as a system and segment them before drawing conclusions.",
      "Choose one improvement experiment and define its expected signal.",
    ],
    tasks: [
      { id: "w9-defs", title: "Write operational definitions for the DORA metrics", evidence: "Data sources, boundaries, and owners" },
      { id: "w9-baseline", title: "Build a small baseline from sample or real delivery data", evidence: "One-page scorecard" },
      { id: "w9-review", title: "Run a metric review without individual productivity measures", evidence: "Constraint and countermeasure note" },
      { id: "w9-capstone", title: "Add a measurement plan to the capstone", evidence: "Baseline, target, and guardrail" },
    ],
    resources: [
      { title: "DORA's software delivery performance metrics", provider: "DORA", url: "https://dora.dev/guides/dora-metrics/", note: "Current official guide to the five-metric model and responsible use.", kind: "guide" },
    ],
  },
  {
    week: 10,
    phase: "Leadership",
    title: "Run the capstone delivery review",
    subtitle: "Show that you can coordinate an AI-assisted release as an operating system, not a demo.",
    hours: "8–10 hours",
    goals: [
      "Present the product outcome, delivery evidence, risk decisions, and operating results.",
      "Lead a go or no-go review and defend the release decision.",
      "Turn failures and metrics into a 30-day improvement plan.",
    ],
    tasks: [
      { id: "w10-release", title: "Run the capstone release-readiness review", evidence: "Recorded go or no-go decision" },
      { id: "w10-demo", title: "Present the delivery system and product outcome", evidence: "Ten-minute stakeholder walkthrough" },
      { id: "w10-retro", title: "Facilitate a blameless retrospective", evidence: "Three findings and one experiment" },
      { id: "w10-portfolio", title: "Package the work as a portfolio case study", evidence: "Public-safe case study with artifacts" },
    ],
    resources: [
      { title: "Blameless postmortems", provider: "Google SRE", url: "https://sre.google/sre-book/postmortem-culture/", note: "Use the format to turn a delivery failure into concrete system improvements.", kind: "guide" },
    ],
  },
];

export const sideQuest: SideQuest = {
  title: "Engineering Management Fundamentals 101",
  provider: "Master.dev",
  url: "https://master.dev/courses/intro-management/",
  duration: "4h 29m",
  note: "Very optional. Use this only if people leadership, meetings, and the manager role are useful to your next job. It is not part of core progress.",
};
