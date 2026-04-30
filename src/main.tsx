import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenCheck,
  Brain,
  CheckCircle2,
  Github,
  Globe2,
  Headphones,
  Mail,
  Moon,
  PanelsTopLeft,
  Smartphone,
  Sun,
  Zap
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Mocktest",
    subtitle: "Structured practice platform for test preparation",
    description:
      "A test practice app with mock flows, audio, section-based navigation, session history, score statistics, donations, and an admin area.",
    image: {
      light: "/assets/mocktest-live-light.png",
      dark: "/assets/mocktest-live-dark.png"
    },
    fallback: "Mocktest practice",
    liveUrl: "https://mocktest.xnv.my.id",
    repoUrl: "https://github.com/arjawa123/mocktests",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Recharts"],
    highlights: [
      "Mock test and drill modes",
      "Audio-based practice flow",
      "History, charts, and progress tracking"
    ],
    icon: Headphones
  },
  {
    title: "Japanese Vocab",
    subtitle: "Vocabulary practice PWA with progress tracking",
    description:
      "A vocabulary practice tool with structured decks, an SRS mistakes pool, daily goals, streaks, TTS, offline/PWA support, and Supabase cloud sync.",
    image: {
      light: "/assets/vocab-live-light.png",
      dark: "/assets/vocab-live-dark.png"
    },
    fallback: "Vocabulary trainer",
    liveUrl: "https://vocab.xnv.my.id",
    repoUrl: "https://github.com/arjawa123/japanese-vocab-app",
    stack: ["Vite", "React", "TypeScript", "PWA", "Express"],
    highlights: [
      "JLPT N5-N1 and common vocabulary",
      "SRS for missed words",
      "Dark mode, TTS, offline support"
    ],
    icon: Brain
  }
];

const capabilities = [
  { label: "React", detail: "Interactive, stateful application UIs", icon: PanelsTopLeft },
  { label: "TypeScript", detail: "Typed state, data models, and flows", icon: CheckCircle2 },
  { label: "Next.js + Vite", detail: "Framework choices matched to product needs", icon: Zap },
  { label: "Supabase", detail: "Auth, database, and cloud sync", icon: Globe2 },
  { label: "PWA", detail: "Installable experiences built for mobile use", icon: Smartphone },
  { label: "UI Systems", detail: "Tokens, dark mode, and consistent components", icon: BookOpenCheck }
];

function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label="Toggle theme">
      <Sun className="sun-icon" size={18} />
      <Moon className="moon-icon" size={18} />
    </button>
  );
}

function ProjectImage({
  src,
  alt,
  fallback
}: {
  src: { light: string; dark: string };
  alt: string;
  fallback: string;
}) {
  return (
    <div className="project-media">
      <img
        className="project-image project-image-light"
        src={src.light}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <img
        className="project-image project-image-dark"
        src={src.dark}
        alt=""
        aria-hidden="true"
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
      <div className="media-placeholder" aria-hidden="true">
        <span>{fallback}</span>
        <small>Portfolio preview</small>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#top" aria-label="briexenv home">
            <span className="brand-mark">br</span>
            <span>
              <strong>briexenv</strong>
              <small>rjw</small>
            </span>
          </a>
          <nav className="topbar-nav" aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="topbar-actions">
            <a className="icon-button" href="https://github.com/arjawa123" target="_blank" rel="noreferrer" aria-label="GitHub arjawa123">
              <Github size={18} />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Web app portfolio</p>
            <h1>Focused digital products for real workflows.</h1>
            <p className="hero-lede">
              A showcase of projects built as usable products: practice
              platforms, productivity tools, and web apps with clear flows,
              real data, and intentional user experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <ArrowDown size={17} />
                View Projects
              </a>
              <a className="button secondary" href="https://github.com/arjawa123" target="_blank" rel="noreferrer">
                <Github size={17} />
                GitHub
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Ringkasan project">
            <div className="panel-row">
              <span>Projects</span>
              <strong>2 ready</strong>
            </div>
            <div className="panel-row">
              <span>Domain</span>
              <strong>Web apps</strong>
            </div>
            <div className="mini-grid">
              <div>
                <Headphones size={18} />
                <span>Mocktest</span>
              </div>
              <div>
                <Brain size={18} />
                <span>Vocab PWA</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Showcase</p>
            <h2>Live, usable projects</h2>
            <p>
              Each project is built as a practical application, not just a UI
              demo: clear user flows, data, progress, and public deployment.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.title}>
                  <ProjectImage src={project.image} alt={`Screenshot ${project.title}`} fallback={project.fallback} />
                  <div className="project-body">
                    <div className="project-title-row">
                      <span className="project-icon">
                        <Icon size={18} />
                      </span>
                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul className="highlight-list">
                      {project.highlights.map((item) => (
                        <li key={item}>
                          <CheckCircle2 size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="tag-row">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Globe2 size={16} />
                        Live Demo
                      </a>
                      <a className="button secondary" href={project.repoUrl} target="_blank" rel="noreferrer">
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section stack-section" id="stack">
          <div className="section-heading">
            <p className="eyebrow">Stack</p>
            <h2>Core toolkit</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className="capability-card" key={item.label}>
                  <Icon size={19} />
                  <h3>{item.label}</h3>
                  <p>{item.detail}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div>
          <strong>briexenv / rjw</strong>
          <p>Building focused tools for learning, productivity, and practical web workflows.</p>
        </div>
        <div className="footer-actions">
          <a className="button secondary" href="mailto:briexenv@gmail.com">
            <Mail size={16} />
            briexenv@gmail.com
          </a>
          <a className="button secondary" href="https://github.com/arjawa123" target="_blank" rel="noreferrer">
            <Github size={16} />
            github.com/arjawa123
            <ArrowUpRight size={15} />
          </a>
        </div>
      </footer>
    </div>
  );
}

const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = storedTheme || (prefersDark ? "dark" : "light");

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
