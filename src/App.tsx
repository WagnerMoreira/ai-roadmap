import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Circle,
  Clock3,
  RotateCcw,
  Sparkles,
  Target,
} from "lucide-react";
import { roadmap, sideQuest } from "./data/roadmap";
import type { RoadmapWeek, Resource } from "./types";
import HowToUse from "./HowToUse";

const STORAGE_KEY = "ai-native-tpm-roadmap-progress-v1";

function loadProgress(): Set<string> {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
    return new Set(Array.isArray(saved) ? saved.filter((value) => typeof value === "string") : []);
  } catch {
    return new Set();
  }
}

function ResourceLink({ resource }: { resource: Resource }) {
  return (
    <a className="resource-link" href={resource.url} target="_blank" rel="noreferrer">
      <span className="resource-icon" aria-hidden="true"><BookOpen size={16} /></span>
      <span className="resource-copy">
        <span className="resource-meta">
          {resource.core && <span className="core-pill">Core course</span>}
          <span>{resource.provider}</span>
          {resource.duration && <span>{resource.duration}</span>}
        </span>
        <strong>{resource.title}</strong>
        <small>{resource.note}</small>
      </span>
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function WeekModule({
  item,
  complete,
  onToggle,
  open,
  onOpen,
}: {
  item: RoadmapWeek;
  complete: Set<string>;
  onToggle: (id: string) => void;
  open: boolean;
  onOpen: () => void;
}) {
  const done = item.tasks.filter((task) => complete.has(task.id)).length;
  const finished = done === item.tasks.length;

  return (
    <article className={`week-card ${open ? "is-open" : ""} ${finished ? "is-finished" : ""}`}>
      <button className="week-summary" type="button" onClick={onOpen} aria-expanded={open}>
        <span className="week-index">{finished ? <Check size={17} /> : <span>{String(item.week).padStart(2, "0")}</span>}</span>
        <span className="week-heading">
          <span className="eyebrow">Week {item.week} · {item.phase}</span>
          <span className="week-title">{item.title}</span>
          <span className="week-subtitle">{item.subtitle}</span>
        </span>
        <span className="week-status">
          <span><Clock3 size={14} /> {item.hours}</span>
          <span>{done}/{item.tasks.length} tasks</span>
        </span>
        <ChevronDown className="chevron" size={21} aria-hidden="true" />
      </button>

      {open && (
        <div className="week-content">
          <section>
            <h3><Target size={17} /> Learning goals</h3>
            <ul className="goal-list">
              {item.goals.map((goal) => <li key={goal}>{goal}</li>)}
            </ul>
          </section>

          <section>
            <h3><Check size={17} /> Build the evidence</h3>
            <div className="task-list">
              {item.tasks.map((task) => {
                const checked = complete.has(task.id);
                return (
                  <label className={`task-row ${checked ? "is-checked" : ""}`} key={task.id}>
                    <input type="checkbox" checked={checked} onChange={() => onToggle(task.id)} />
                    <span className="custom-check" aria-hidden="true">{checked ? <Check size={15} /> : <Circle size={15} />}</span>
                    <span><strong>{task.title}</strong><small>{task.evidence}</small></span>
                  </label>
                );
              })}
            </div>
          </section>

          <section>
            <h3><BookOpen size={17} /> Resources</h3>
            <div className="resource-list">
              {item.resources.map((resource) => <ResourceLink key={resource.title} resource={resource} />)}
            </div>
          </section>
        </div>
      )}
    </article>
  );
}

export default function App() {
  if (window.location.pathname.startsWith("/how-to-use")) {
    return <HowToUse />;
  }

  const isMetal = !window.location.pathname.startsWith("/classic");

  const [complete, setComplete] = useState<Set<string>>(loadProgress);
  const [openWeek, setOpenWeek] = useState(1);
  const allTasks = useMemo(() => roadmap.flatMap((week) => week.tasks), []);
  const doneCount = allTasks.filter((task) => complete.has(task.id)).length;
  const percent = Math.round((doneCount / allTasks.length) * 100);
  const nextTask = allTasks.find((task) => !complete.has(task.id));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...complete]));
  }, [complete]);

  function toggleTask(id: string) {
    setComplete((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function resetProgress() {
    if (doneCount === 0 || window.confirm("Reset all checked tasks? This cannot be undone.")) {
      setComplete(new Set());
      setOpenWeek(1);
    }
  }

  return (
    <main className={isMetal ? "metal-theme" : undefined}>
      <header className="hero">
        <nav className="topbar" aria-label="Page navigation">
          <a className="wordmark" href="#top">{isMetal ? "IRON PATH" : "AI-NATIVE ROADMAP"}</a>
          <div>
            <a href="/how-to-use/">How to use</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#side-quest">Side quest</a>
            <a href={isMetal ? "/classic/" : "/"}>{isMetal ? "Classic version" : "Metal version"}</a>
          </div>
        </nav>

        <div className="hero-grid" id="top">
          <div className="hero-copy">
            <span className="kicker">{isMetal ? "10-week campaign · 40 trials · one final release" : "10 weeks · 6–10 hours/week · one capstone"}</span>
            <h1>{isMetal ? <>Command the machine.<br />Deliver the release.</> : <>Run software delivery<br />with AI in the loop.</>}</h1>
            <p>
              {isMetal
                ? "A field manual for technical project managers operating where code, AI agents, quality gates, and production releases collide."
                : "A field guide for technical project managers who need to coordinate code, releases, agents, quality, governance, and delivery performance."}
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#roadmap">
                {isMetal ? "Open the roadmap" : "Continue the roadmap"} <ChevronDown size={17} />
              </a>
              <a className="secondary-action" href="/how-to-use/">How to use it</a>
            </div>
          </div>

          <aside className="progress-panel" aria-label="Overall progress">
            <div className="progress-topline">
              <span>{isMetal ? "Campaign progress" : "Overall progress"}</span>
              <strong>{percent}%</strong>
            </div>
            <div className="progress-track" aria-hidden="true"><span style={{ width: `${percent}%` }} /></div>
            <p>{doneCount} of {allTasks.length} practical tasks complete</p>
            <div className="next-up">
              <span>Next evidence</span>
              <strong>{nextTask?.title ?? "Roadmap complete"}</strong>
            </div>
            <button className="reset-button" type="button" onClick={resetProgress}>
              <RotateCcw size={14} /> Reset progress
            </button>
          </aside>
        </div>

        <div className="phase-strip" aria-label="Curriculum phases">
          <span><b>01</b> Foundation</span>
          <span><b>02</b> AI delivery</span>
          <span><b>03</b> Operations</span>
          <span><b>04</b> Leadership</span>
        </div>
      </header>

      <section className="roadmap-section" id="roadmap">
        <div className="section-intro">
          <div>
            <span className="eyebrow">{isMetal ? "The campaign" : "Your route"}</span>
            <h2>{isMetal ? "Ten weeks. No filler." : "Ten weeks. One connected system."}</h2>
          </div>
          <p>Open a week, complete the work, and check off the evidence. Progress stays in this browser.</p>
        </div>

        <div className="roadmap-list">
          {roadmap.map((item) => (
            <WeekModule
              key={item.week}
              item={item}
              complete={complete}
              onToggle={toggleTask}
              open={openWeek === item.week}
              onOpen={() => setOpenWeek((current) => current === item.week ? 0 : item.week)}
            />
          ))}
        </div>
      </section>

      <section className="capstone-section">
        <div className="capstone-number">10</div>
        <div>
          <span className="eyebrow">{isMetal ? "The final release" : "The capstone thread"}</span>
          <h2>{isMetal ? "Prove the system under pressure." : "Ship a small product as if it mattered."}</h2>
        </div>
        <p>
          Start with a delivery brief. Build the backlog with an AI agent. Set quality and governance gates.
          Plan the release, respond to a simulated incident, and report the DORA signals. The final artifact is
          a portfolio case study that shows how you operate the system.
        </p>
      </section>

      <section className="side-quest-section" id="side-quest">
        <div className="side-quest-label"><Sparkles size={16} /> Very optional side quest</div>
        <div className="side-quest-card">
          <div>
            <span>{sideQuest.provider} · {sideQuest.duration}</span>
            <h2>{sideQuest.title}</h2>
            <p>{sideQuest.note}</p>
          </div>
          <a href={sideQuest.url} target="_blank" rel="noreferrer">
            View course <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      <footer>
        <span>AI-Native Technical Project Manager</span>
        <span>Progress is stored only in your browser.</span>
      </footer>
    </main>
  );
}
