import { ArrowLeft, ArrowRight, BookOpen, Check, Clock3, Lightbulb, Target } from "lucide-react";

const weeklyRhythm = [
  { time: "30 min", title: "Plan", detail: "Read the week's goals and tasks. Put two study blocks on your calendar." },
  { time: "3–5 hrs", title: "Learn", detail: "Take the core course and open a guide only when it answers a current question." },
  { time: "2–3 hrs", title: "Apply", detail: "Complete the practical tasks and add the result to your capstone folder." },
  { time: "30 min", title: "Review", detail: "Check off finished evidence and write the next action before you stop." },
];

export default function HowToUse() {
  return (
    <main className="guide-page">
      <header className="guide-header">
        <nav className="topbar" aria-label="Guide navigation">
          <a className="wordmark" href="/">AI-NATIVE ROADMAP</a>
          <a className="back-link" href="/"><ArrowLeft size={15} /> Back to roadmap</a>
        </nav>

        <div className="guide-hero">
          <span className="kicker">A two-minute guide</span>
          <h1>Use the roadmap without turning it into another unfinished course.</h1>
          <p>Finish one week at a time. Learn only what the tasks require, then keep the evidence you produce.</p>
        </div>
      </header>

      <section className="start-card" aria-labelledby="start-title">
        <div className="start-marker">15</div>
        <div>
          <span className="eyebrow">Your first 15 minutes</span>
          <h2 id="start-title">Start small today.</h2>
        </div>
        <ol>
          <li>Bookmark the roadmap on the browser you will keep using.</li>
          <li>Open Week 1 and read only its three learning goals.</li>
          <li>Choose a simple capstone product you already understand.</li>
          <li>Schedule two study blocks for this week.</li>
        </ol>
      </section>

      <section className="guide-section" aria-labelledby="rhythm-title">
        <div className="guide-section-heading">
          <span className="eyebrow">Repeat every week</span>
          <h2 id="rhythm-title">A simple weekly rhythm</h2>
          <p>The hours are a ceiling, not a quota. Stop when you can produce the requested evidence.</p>
        </div>

        <div className="rhythm-list">
          {weeklyRhythm.map((item, index) => (
            <article className="rhythm-row" key={item.title}>
              <span className="rhythm-index">0{index + 1}</span>
              <div><strong>{item.title}</strong><small>{item.detail}</small></div>
              <span className="rhythm-time"><Clock3 size={15} /> {item.time}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section rules-section" aria-labelledby="rules-title">
        <div className="guide-section-heading">
          <span className="eyebrow">Keep it useful</span>
          <h2 id="rules-title">Four rules for progress</h2>
        </div>

        <div className="rule-grid">
          <article><BookOpen size={20} /><strong>Core first</strong><p>Complete the three named Master.dev courses. Treat other links as references, not extra homework.</p></article>
          <article><Target size={20} /><strong>Evidence over watching</strong><p>Check a task only when its artifact exists. Notes alone do not finish a practical task.</p></article>
          <article><Lightbulb size={20} /><strong>Use one capstone</strong><p>Apply each week to the same small product so the work becomes one portfolio story.</p></article>
          <article><Check size={20} /><strong>Same browser</strong><p>Progress is saved on this device. Use the same browser each week so the checks remain visible.</p></article>
        </div>
      </section>

      <section className="stuck-card">
        <div>
          <span className="eyebrow">When a week feels too big</span>
          <h2>Do the smallest task that creates evidence.</h2>
          <p>Skip optional coding exercises. Write down the blocker, complete the next practical item, and return only if the blocker affects the capstone.</p>
        </div>
        <a href="/#roadmap">Open Week 1 <ArrowRight size={17} /></a>
      </section>

      <footer>
        <span>AI-Native Technical Project Manager</span>
        <a href="/">Return to the roadmap</a>
      </footer>
    </main>
  );
}
