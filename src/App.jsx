import './index.css'

const projects = [
  {
    id: '001',
    title: 'DEEP THOUGHT',
    desc: 'A locally-running AI oracle. Powered by WebLLM — no server, no API key, no data leaving your machine. One question per consultation.',
    tags: ['WebLLM', 'WebGPU', 'Local AI'],
    href: '/deep-thought',
    live: true,
  },
  {
    id: '002',
    title: 'CLEARPATH',
    desc: 'A HOP-focused EHS platform for event learning and safety intelligence. Currently in development.',
    tags: ['SaaS', 'EHS', 'HOP'],
    href: null,
    live: false,
    soon: true,
  },
  {
    id: '003',
    title: 'MORE SOON',
    desc: 'More projects are in progress. Check back.',
    tags: [],
    href: null,
    live: false,
    soon: true,
  },
]

function ProjectCard({ project }) {
  const isSoon = !project.live

  const inner = (
    <>
      <div className="card-number">PROJECT — {project.id}</div>
      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.desc}</div>
      {isSoon ? (
        <div className="card-soon-label">— coming soon —</div>
      ) : (
        <div className="card-footer">
          <div className="card-tags">
            {project.tags.map(t => (
              <span className="card-tag" key={t}>{t}</span>
            ))}
          </div>
          <span className="card-arrow">↗</span>
        </div>
      )}
    </>
  )

  if (isSoon) {
    return <div className="project-card card-soon">{inner}</div>
  }

  return (
    <a className="project-card" href={project.href}>
      {inner}
    </a>
  )
}

export default function App() {
  const year = new Date().getFullYear()
  return (
    <>
      <header>
        <div className="masthead">
          JOHN<span className="masthead-accent">.</span>SEN
        </div>
        <div className="tagline-row">
          <span className="tagline">Aaron Johnsen &nbsp;·&nbsp; johnsen.world</span>
          <span className="tagline-right">building things worth building</span>
        </div>
      </header>
      <main>
        <div className="section-label">Projects</div>
        <div className="project-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} />)}
        </div>
      </main>
      <footer>
        <span>© {year} Aaron Johnsen</span>
        <span>
          <a href="https://ajohnsen.com" target="_blank" rel="noreferrer">ajohnsen.com</a>
          &nbsp;·&nbsp;
          <a href="https://github.com" target="_blank" rel="noreferrer">github</a>
        </span>
      </footer>
    </>
  )
}
