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
    subtitle: "Latihan JFT mockup dan drill kisi-kisi",
    description:
      "Aplikasi latihan tes Jepang dengan alur mockup, audio, navigasi per bagian, riwayat sesi, statistik skor, donasi, dan area admin.",
    image: "/assets/mocktest-preview.svg",
    fallback: "JFT mockup practice",
    liveUrl: "https://mocktest.xnv.biz.id",
    repoUrl: "https://github.com/arjawa123/mocktests",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "Recharts"],
    highlights: [
      "Mode JFT Mockup dan Kisi-kisi",
      "Audio-based practice flow",
      "Riwayat, chart, dan progress tracking"
    ],
    icon: Headphones
  },
  {
    title: "Japanese Vocab",
    subtitle: "PWA vocabulary practice untuk learner Indonesia",
    description:
      "Tool latihan kosakata Jepang dengan deck JLPT, SRS mistakes pool, target harian, streak, TTS, offline/PWA, dan cloud sync via Supabase.",
    image: "/assets/japanese-vocab-preview.svg",
    fallback: "JLPT vocab trainer",
    liveUrl: "https://vocab.xnv.biz.id",
    repoUrl: "https://github.com/arjawa123/japanese-vocab-app",
    stack: ["Vite", "React", "TypeScript", "PWA", "Express"],
    highlights: [
      "JLPT N5-N1 dan common vocab",
      "SRS untuk kata yang salah",
      "Dark mode, TTS, offline support"
    ],
    icon: Brain
  }
];

const capabilities = [
  { label: "React", detail: "UI aplikasi interaktif", icon: PanelsTopLeft },
  { label: "TypeScript", detail: "State dan data flow terjaga", icon: CheckCircle2 },
  { label: "Next.js + Vite", detail: "Pilih tool sesuai kebutuhan produk", icon: Zap },
  { label: "Supabase", detail: "Auth, database, dan cloud sync", icon: Globe2 },
  { label: "PWA", detail: "Installable dan nyaman di mobile", icon: Smartphone },
  { label: "UI Systems", detail: "Token, dark mode, dan komponen konsisten", icon: BookOpenCheck }
];

function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label="Ganti tema">
      <Sun className="sun-icon" size={18} />
      <Moon className="moon-icon" size={18} />
    </button>
  );
}

function ProjectImage({ src, alt, fallback }: { src: string; alt: string; fallback: string }) {
  return (
    <div className="project-media">
      <img
        src={src}
        alt={alt}
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
              <small>alias rjw</small>
            </span>
          </a>
          <nav className="topbar-nav" aria-label="Navigasi utama">
            <a href="#projects">Project</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Kontak</a>
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
            <p className="eyebrow">Portfolio project-based</p>
            <h1>Focused learning tools, built by briexenv alias rjw.</h1>
            <p className="hero-lede">
              Showcase dua produk belajar bahasa Jepang yang sudah siap dicoba:
              mocktest JFT dengan alur latihan terstruktur dan vocabulary trainer
              PWA untuk learner Indonesia.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                <ArrowDown size={17} />
                Lihat Project
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
              <strong>Japanese learning</strong>
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
            <h2>Project yang siap dipakai</h2>
            <p>
              Keduanya dibuat sebagai aplikasi praktis, bukan sekadar demo UI:
              ada latihan, data, progress, dan deployment publik.
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
            <h2>Kemampuan yang terlihat dari project</h2>
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
          <p>Building focused tools for language learning and practice workflows.</p>
        </div>
        <a className="button secondary" href="https://github.com/arjawa123" target="_blank" rel="noreferrer">
          <Github size={16} />
          github.com/arjawa123
          <ArrowUpRight size={15} />
        </a>
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
