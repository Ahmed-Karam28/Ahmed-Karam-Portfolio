import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  X,
  Plus,
  Layers,
  Terminal,
} from "lucide-react";
import { projects } from "../../data/portfolioData";
import Reveal from "../ui/Reveal";

const TITLES = {
  hekayah: "Hekayah",
  nasj: "NASJ",
  moodfood: "MoodFood",
  easyrent: "EasyRent",
  "dental-clinic": "Dental practice platform",
  "mariam-portfolio": "Architecture portfolio",
  "headless-linux-wheelchair": "Headless Linux & ROS 2",
  "bluetooth-control": "Bluetooth control unit",
};
const SUMMARIES = {
  hekayah:
    "Arabic localization, RTL interfaces and automated testing for an AI-assisted comic creation platform.",
  nasj: "An e-commerce storefront with product management, Next.js API routes and Docker-based services.",
  moodfood:
    "Restaurant discovery for Saudi Arabia, from browsing venues to the API and administration behind them.",
  easyrent:
    "A property rental experience for apartments, villas and chalets in Egypt.",
  "dental-clinic":
    "A bilingual booking experience with a Firebase backend and real-time administration.",
  "mariam-portfolio":
    "A project-led architecture portfolio with dynamic pages and responsive layouts.",
  "headless-linux-wheelchair":
    "Headless Raspberry Pi administration, systemd services and ROS 2 robotics middleware.",
  "bluetooth-control":
    "Arduino motor control and wireless commands through HC-05 Bluetooth modules.",
};
const SYSTEM_IDS = new Set(["headless-linux-wheelchair", "bluetooth-control"]);
const FEATURED_IDS = ["moodfood", "nasj", "hekayah"];
const SYSTEM_COUNT = projects.filter((project) =>
  SYSTEM_IDS.has(project.id),
).length;
const FILTERS = [
  { id: "all", label: "All work" },
  { id: "web", label: "Web applications" },
  { id: "systems", label: "Systems & hardware" },
];

function ProjectVisual({ project, compact = false }) {
  return project.image ? (
    <div className={`project-visual ${compact ? "is-compact" : ""}`}>
      <img
        src={project.image}
        alt={`${TITLES[project.id]} interface capture`}
        loading="lazy"
        decoding="async"
        width="1200"
        height="750"
      />
    </div>
  ) : (
    <div
      className="systems-visual"
      role="img"
      aria-label="Project schematic: Raspberry Pi Linux server, systemd services and ROS 2 nodes"
    >
      <Terminal size={30} aria-hidden="true" />
      <span>LINUX / ROS 2</span>
      <div className="system-flow">
        <span>Raspberry Pi</span>
        <i>→</i>
        <span>systemd</span>
        <i>→</i>
        <span>ROS 2 nodes</span>
      </div>
      <small>Headless server · Robotics middleware</small>
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <>
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-action"
        >
          Live site <ArrowUpRight size={15} aria-hidden="true" />
          <span className="sr-only">
            , {TITLES[project.id]}, opens in new tab
          </span>
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-action"
        >
          Source code <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      )}
    </>
  );
}

function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);
  const images = project.images || [];
  useEffect(() => {
    const node = dialog.current;
    const previousOverflow = document.body.style.overflow;
    node.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (node.open) node.close();
    };
  }, []);
  const changeImage = (delta) =>
    setImageIndex((index) => (index + delta + images.length) % images.length);
  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "Tab") {
          const nodes = [...dialog.current.querySelectorAll("button, a[href]")];
          const index = nodes.indexOf(document.activeElement);
          if (event.shiftKey && index <= 0) {
            event.preventDefault();
            nodes.at(-1)?.focus();
          } else if (!event.shiftKey && index === nodes.length - 1) {
            event.preventDefault();
            nodes[0]?.focus();
          }
        }
        if (images.length > 1 && event.key === "ArrowRight") {
          event.preventDefault();
          changeImage(1);
        }
        if (images.length > 1 && event.key === "ArrowLeft") {
          event.preventDefault();
          changeImage(-1);
        }
      }}
    >
      <div className="dialog-surface">
        <div className="dialog-top">
          <span className="eyebrow">
            Project {project.number} / {project.category}
          </span>
          <button
            onClick={onClose}
            autoFocus
            aria-label="Close project details"
            className="icon-button"
          >
            <X size={20} />
          </button>
        </div>
        <div className="dialog-scroll">
          <div className="dialog-intro">
            <p className="eyebrow">{project.subtitle}</p>
            <h2 id="project-dialog-title">{TITLES[project.id]}</h2>
            <p>{SUMMARIES[project.id]}</p>
            <div className="flex flex-wrap gap-6 mt-5">
              <ProjectLinks project={project} />
            </div>
          </div>
          {images.length > 0 && (
            <figure className="dialog-gallery">
              <div className="gallery-image">
                <img
                  src={images[imageIndex].src}
                  alt={images[imageIndex].caption}
                  width="1200"
                  height="750"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span aria-live="polite">{images[imageIndex].caption}</span>
                {images.length > 1 && (
                  <div className="gallery-controls">
                    <button
                      onClick={() => changeImage(-1)}
                      className="icon-button"
                      aria-label="Previous project image"
                    >
                      <ArrowLeft size={17} />
                    </button>
                    <span>
                      {String(imageIndex + 1).padStart(2, "0")} /{" "}
                      {String(images.length).padStart(2, "0")}
                    </span>
                    <button
                      onClick={() => changeImage(1)}
                      className="icon-button"
                      aria-label="Next project image"
                    >
                      <ArrowRight size={17} />
                    </button>
                  </div>
                )}
              </figcaption>
            </figure>
          )}
          <div className="dialog-record">
            <div>
              <h3>Implementation</h3>
              <ul>
                {project.implementation.map((item) => (
                  <li key={item}>
                    <Plus size={13} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside>
              <h3>Tools &amp; technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className="record-note">
                {project.liveLink
                  ? "Explore the live site for the current experience."
                  : "Interface captures and implementation notes are included here. A public live site is not linked."}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </dialog>
  );
}

function ProjectCard({ project, lead = false, onOpen }) {
  return (
    <article className={`project-card ${lead ? "project-lead" : ""}`}>
      {project.image ? (
        <button
          className="project-image-button"
          onClick={() => onOpen(project)}
          aria-label={`${TITLES[project.id]} Explore project`}
        >
          <ProjectVisual project={project} />

        </button>
      ) : (
        <ProjectVisual project={project} />
      )}
      <div className="project-card-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.number}</span>
        </div>
        <h3>
          <button onClick={() => onOpen(project)}>
            {TITLES[project.id]} <ArrowUpRight size={22} aria-hidden="true" />
          </button>
        </h3>
        <p>{SUMMARIES[project.id]}</p>
        <div className="project-tools">
          {project.tags.slice(0, 4).join(" / ")}
        </div>
        <div className="project-actions">
          <button onClick={() => onOpen(project)} className="text-action">
            View project <ArrowRight size={15} aria-hidden="true" />
            <span className="sr-only">, {TITLES[project.id]}</span>
          </button>
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

/* Featured projects: a grid on tablet and desktop, a snap carousel on phones. */
function ProjectShowcase({ children }) {
  const trackRef = useRef(null);
  const [state, setState] = useState({ index: 0, progress: 0, touched: false });
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const phone = window.matchMedia("(max-width: 767px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;
    let nudged = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || nudged) return;
        nudged = true;
        if (!phone.matches || reduced.matches || track.scrollLeft > 0) return;
        track.scrollTo({ left: 44, behavior: "smooth" });
        timer = window.setTimeout(() => {
          if (track.scrollLeft <= 48) track.scrollTo({ left: 0, behavior: "smooth" });
        }, 650);
      },
      { threshold: 0.7 },
    );
    observer.observe(track);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const first = track.querySelector(".project-card");
    const step = first ? first.getBoundingClientRect().width + 14 : 1;
    setState((previous) => ({
      index: Math.min(2, Math.round(track.scrollLeft / step)),
      progress: max > 0 ? track.scrollLeft / max : 0,
      touched: previous.touched || track.scrollLeft > 60,
    }));
  };
  return (
    <>
      <div className="project-showcase" ref={trackRef} onScroll={onScroll}>
        {children}
      </div>
      <div className="showcase-bar" aria-hidden="true">
        <span className="showcase-count">
          <b>{String(state.index + 1).padStart(2, "0")}</b> / 03
        </span>
        <span className="showcase-progress">
          <i style={{ width: `${34 + state.progress * 66}%` }} />
        </span>
        <span className={`showcase-swipe${state.touched ? " is-hidden" : ""}`}>
          Swipe <ArrowRight size={13} />
        </span>
      </div>
    </>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [searchParams, setSearchParams] = useSearchParams();
  const selected =
    projects.find((project) => project.id === searchParams.get("project")) ||
    null;
  const lastTrigger = useRef(null);
  const openProject = (project) => {
    lastTrigger.current = document.activeElement;
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        next.set("project", project.id);
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
  };
  const closeProject = () => {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);
        next.delete("project");
        return next;
      },
      { replace: true, preventScrollReset: true },
    );
    requestAnimationFrame(() => lastTrigger.current?.focus());
  };
  const featured = FEATURED_IDS.map((id) =>
    projects.find((project) => project.id === id),
  );
  const rest = projects.filter((project) => !FEATURED_IDS.includes(project.id));
  const filtered = projects.filter((project) =>
    filter === "systems"
      ? SYSTEM_IDS.has(project.id)
      : !SYSTEM_IDS.has(project.id),
  );
  return (
    <section id="work" className="work-section section-shell">
      <Reveal>
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / Selected work</span>
            <h2>
              Built with <em>purpose.</em>
            </h2>
          </div>
          <p>
            Web experiences, the services behind them, and a few things closer
            to the hardware.
          </p>
        </div>
      </Reveal>
      <div className="work-toolbar">
        <div className="work-filters" aria-label="Filter projects">
          {FILTERS.map((item) => (
            <button
              key={item.id}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
              <span>
                {item.id === "all"
                  ? projects.length
                  : item.id === "systems"
                    ? SYSTEM_COUNT
                    : projects.length - SYSTEM_COUNT}
              </span>
            </button>
          ))}
        </div>
        <span className="work-count" aria-live="polite">
          {filter === "all"
            ? "3 featured / 5 more"
            : `${filtered.length} projects`}
        </span>
      </div>
      {filter === "all" ? (
        <>
          <ProjectShowcase>
            <ProjectCard project={featured[0]} lead onOpen={openProject} />
            <div className="project-grid">
              {featured.slice(1).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={openProject}
                />
              ))}
            </div>
          </ProjectShowcase>
          <div className="more-work-heading">
            <Layers size={15} aria-hidden="true" />
            <h3>More explorations &amp; client work</h3>
            <span>04 to 08</span>
          </div>
          <div className="project-index">
            {rest.map((project) => (
              <article key={project.id}>
                <span className="index-number">{project.number}</span>
                <button
                  type="button"
                  className="index-thumb"
                  tabIndex={-1}
                  aria-hidden="true"
                  onClick={() => openProject(project)}
                >
                  {project.image ? (
                    <img src={project.image} alt="" loading="lazy" />
                  ) : (
                    <span>{project.tags[2] || project.tags[0]}</span>
                  )}
                </button>
                <div className="index-content">
                  <h4>
                    <button onClick={() => openProject(project)}>
                      {TITLES[project.id]}
                    </button>
                  </h4>
                  <p>{SUMMARIES[project.id]}</p>
                  <span>{project.tags.slice(0, 3).join(" / ")}</span>
                </div>
                <button
                  className="index-open icon-button"
                  aria-label={`${TITLES[project.id]} Explore project`}
                  onClick={() => openProject(project)}
                >
                  <ArrowUpRight size={19} />
                </button>
              </article>
            ))}
          </div>
        </>
      ) : (
        <div className="project-grid filtered-grid">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={openProject}
            />
          ))}
        </div>
      )}
      {selected && (
        <ProjectDialog
          key={selected.id}
          project={selected}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
