import {
  siClaude,
  siFigma,
  siFramer,
  siGithub,
  siGodaddy,
  siNextdotjs,
  siShopify,
  siSupabase,
  siVercel,
} from "simple-icons/icons";

const technologies = [
  { name: "Claude", icon: siClaude, color: `#${siClaude.hex}` },
  { name: "OpenAI", wordmark: "OpenAI", color: "#000000" },
  { name: "Shopify", icon: siShopify, color: `#${siShopify.hex}` },
  { name: "GoDaddy", icon: siGodaddy, color: `#${siGodaddy.hex}` },
  { name: "Vercel", icon: siVercel, color: `#${siVercel.hex}` },
  { name: "GitHub", icon: siGithub, color: `#${siGithub.hex}` },
  { name: "Supabase", icon: siSupabase, color: `#${siSupabase.hex}` },
  { name: "Next.js", icon: siNextdotjs, color: `#${siNextdotjs.hex}` },
  { name: "Figma", icon: siFigma, color: `#${siFigma.hex}` },
  { name: "Framer", icon: siFramer, color: `#${siFramer.hex}` },
] as const;

function TechnologyGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="tech-marquee__group" aria-hidden={duplicate || undefined}>
      {technologies.map((technology) => (
          <span className="tech-marquee__unit" key={technology.name}>
            <span
              className="tech-marquee__brand"
              role="img"
              aria-label={technology.name}
              style={{ color: technology.color }}
            >
            {"icon" in technology ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={technology.icon.path} fill="currentColor" />
              </svg>
            ) : (
              <span className="tech-marquee__wordmark">{technology.wordmark}</span>
            )}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="tech-marquee" aria-label="Tecnología que Sitio usa para construir proyectos">
      <p className="tech-marquee__label">NUESTRAS TECNOLOGÍAS</p>
      <div className="tech-marquee__viewport">
        <div className="tech-marquee__track">
          <TechnologyGroup />
          <TechnologyGroup duplicate />
        </div>
      </div>
    </div>
  );
}
