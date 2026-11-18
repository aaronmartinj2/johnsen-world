import './index.css'

const sections = [
  {
    label: 'Games',
    projects: [
      {
        title: 'ECHO',
        desc: 'You are a sound, sinking through black water. Pulse to see, steer to survive.',
        status: 'Web',
        href: '/echo/',
      },
      {
        title: 'SALTED EARTH',
        desc: 'Turn-based artillery in the spirit of the DOS classics. Up to four players.',
        status: 'Web',
        href: '/salted-earth/',
      },
      {
        title: 'POWDER PANIC',
        desc: 'SkiFree, dressed as Windows 3.1. Then spend your winnings at the Bar.',
        status: 'Web',
        href: '/powder-panic/',
      },
      {
        title: 'MONKEY SHUTTLE',
        desc: 'One-tap space arcade. A banana-powered rocket, the Moon to the edge of the solar system.',
        status: 'Web · iOS soon',
        href: '/monkey-shuttle/',
      },
    ],
  },
  {
    label: 'Tools',
    projects: [
      {
        title: 'LINEUP CARD',
        desc: 'Youth baseball lineups. Drag-and-drop positions, batting orders, printable cards.',
        status: 'Web',
        href: '/lineup/',
      },
      {
        title: 'DECISION WHEEL',
        desc: 'Stop overthinking. Spin the wheel or race the horses and let something decide.',
        status: 'Web',
        href: '/decision-wheel/',
      },
      {
        title: 'DEEP THOUGHT',
        desc: 'An AI oracle that runs entirely in your browser. One question per consultation.',
        status: 'Needs WebGPU',
        href: '/deep-thought',
      },
    ],
  },
  {
    label: 'Work',
    projects: [
      {
        title: 'NEWPLAN',
        desc: 'Event learning and safety intelligence for EHS teams, built on HOP principles.',
        status: 'In development',
        href: 'https://heynewplan.com',
        external: true,
      },
    ],
  },
]

function ProjectCard({ project, index }) {
  return (
    <a
      className="project-card"
      href={project.href}
      style={{ '--i': index }}
      {...(project.external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <div className="card-title">{project.title}</div>
      <div className="card-desc">{project.desc}</div>
      <div className="card-footer">
        <span className="card-status">{project.status}</span>
        <span className="card-arrow">↗</span>
      </div>
    </a>
  )
}

export default function App() {
  const year = new Date().getFullYear()
  let i = 0
  return (
    <>
      <header>
        <div className="masthead">
          JOHNSEN
        </div>
        <div className="tagline-row">
          <span className="tagline">Aaron Johnsen &nbsp;·&nbsp; johnsen.world</span>
        </div>
      </header>
      <main>
        {sections.map(section => (
          <section className="project-section" key={section.label}>
            <div className="section-label">
              {section.label}
              <span className="section-count">{String(section.projects.length).padStart(2, '0')}</span>
            </div>
            <div className="project-grid">
              {section.projects.map(p => (
                <ProjectCard key={p.title} project={p} index={i++} />
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer>
        <span>© {year} Aaron Johnsen</span>
        <span>
          <a href="https://ajohnsen.com" target="_blank" rel="noreferrer">ajohnsen.com</a>
          &nbsp;·&nbsp;
          <a href="https://github.com/aaronmartinj2" target="_blank" rel="noreferrer">github</a>
        </span>
      </footer>
    </>
  )
}
