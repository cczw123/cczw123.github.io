import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import type { ReactNode } from "react";

type SkillItem = { label: string; value: string };

export type ProjectDetailsProps = {
  card: ProjectCardProps;
  videoEmbedSrc?: string; // now optional
  pdfSrc?: string; // optional PDF to render instead of video
  skills?: SkillItem[];
  heading?: string;
  year?: string | number; // optional year tag
  overview?: string | ReactNode; // optional, longer project explanation
};

export function ProjectDetails({
  card,
  videoEmbedSrc,
  pdfSrc,
  skills = [],
  heading,
  year,
  overview,
}: ProjectDetailsProps) {
  const title = heading ?? (card.badge ? `${card.title} (${card.badge})` : card.title);

  const renderOverview = () => {
    if (!overview) return null;
    if (typeof overview !== "string") return <div className="space-y-3">{overview}</div>;
    // Split paragraphs on blank lines
    const paragraphs = overview.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
    return (
      <div className="space-y-3">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            {p}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="flex items-center gap-3 text-2xl font-semibold">
        <span>{title}</span>
        {year && (
          <span className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
            {year}
          </span>
        )}
      </h1>

      <div className="mt-4">
        <ProjectCard {...card} />
      </div>

      {overview && (
        <>
          <div className="my-8 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Overview</h2>
            {renderOverview()}
          </section>
        </>
      )}

  {skills.length > 0 && (
        <>
          <div className="my-8 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
          <section className="space-y-4">
            <h2 className="text-xl font-medium">Skills Used in This Project</h2>
            <ul className="list-disc space-y-1 pl-5 text-zinc-700 dark:text-zinc-300">
              {skills.map((s) => (
                <li key={s.label}>
                  <strong>{s.label}:</strong> {s.value}
                </li>
              ))}
            </ul>
          </section>
        </>
      )}

      {(pdfSrc || videoEmbedSrc) && (
        <section className="mt-8">
          {pdfSrc ? (
            <div className="relative w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800">
              <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-zinc-200 bg-white/80 p-2 text-xs dark:border-zinc-800 dark:bg-zinc-900/70">
                <span className="text-zinc-600 dark:text-zinc-300">Document preview</span>
                <a
                  className="rounded bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  href={pdfSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>
              </div>
              <iframe
                className="h-[75vh] w-full"
                src={`${pdfSrc}#toolbar=1&view=FitH`}
                title={`${card.title} document`}
              />
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800">
              <iframe
                className="h-full w-full"
                src={videoEmbedSrc}
                title={card.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </section>
      )}

      <a className="mt-10 inline-block text-blue-600 dark:text-blue-400" href="/">
        ← Back
      </a>
    </div>
  );
}
