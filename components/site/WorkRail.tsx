import { projects } from "@/content/site";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function WorkRail() {
  return (
    <section id="trabajos" className="work-section">
      <div className="work-heading site-shell">
        <Reveal>
          <h2>No solo se ven bien. <span className="no-orphan">Puedes abrirlos.</span></h2>
        </Reveal>
      </div>

      <div className="work-track site-shell">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 0.06}>
            <article className="work-card" id={`proyecto-${project.tone}`}>
              <a className="work-card__visual" href={project.href} aria-label={`Abrir ${project.name}`}>
                <ProjectVisual tone={project.tone} />
              </a>
              <div className="work-card__copy">
                <h3>{project.name}</h3>
                <p className="work-card__type">{project.type}</p>
                <p>{project.description}</p>
                <ul>
                  {project.deliverables.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={project.href}>
                  {project.kind === "real" ? "Ver proyecto" : "Abrir demo"} <span>↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
