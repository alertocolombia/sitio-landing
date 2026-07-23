import { Wordmark } from "@/components/brand/Logo";
import { footer, site } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-azul text-white">
      <div className="mx-auto max-w-6xl border-t border-white/20 px-5 py-12 md:py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Wordmark className="h-9 w-auto" />
            <p className="eyebrow mt-4 !text-[10px] text-white/60">
              {footer.lema}
            </p>
          </div>

          <ul className="flex flex-col gap-2 font-mono text-[12px] tracking-wider text-white/80 md:items-end">
            <li>
              <a
                href={`mailto:${site.correo}`}
                className="transition-opacity duration-150 hover:opacity-70"
              >
                {site.correo}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-150 hover:opacity-70"
              >
                {site.instagram}
              </a>
            </li>
            <li>{site.dominio}</li>
          </ul>
        </div>

        <p className="mt-10 border-t border-white/15 pt-6 font-mono text-[11px] tracking-wider text-white/50">
          {footer.derechos} — {footer.lema}
        </p>
      </div>
    </footer>
  );
}
