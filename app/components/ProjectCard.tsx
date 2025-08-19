export type ProjectCardProps = {
  title: string;
  description: string;
  href: string;
  mediaSrc?: string;
  mediaAlt?: string;
  badge?: string;
  // Optional PDF to preview inside the card (will override mediaSrc if provided)
  pdfSrc?: string;
  // Optional embedded video (e.g., Vimeo/YouTube)
  videoEmbedSrc?: string;
};

export function ProjectCard({ title, description, href, mediaSrc, mediaAlt, badge, pdfSrc, videoEmbedSrc }: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_320px] sm:items-center">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
            {badge && (
              <span className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{description}</p>
          <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 group-hover:gap-2 dark:text-blue-400">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-4 w-4">
              <path d="M13.5 4.5a.75.75 0 0 0 0 1.5h5.69l-8.72 8.72a.75.75 0 1 0 1.06 1.06l8.72-8.72V12a.75.75 0 0 0 1.5 0V4.5h-7.25Z" />
            </svg>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 aspect-video sm:aspect-[16/9] dark:border-zinc-800 dark:bg-zinc-800">
          {pdfSrc ? (
            <>
              <iframe
                className="h-full w-full"
                src={`${pdfSrc}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={`${title} document preview`}
              />
              <div className="pointer-events-none absolute right-2 top-2 rounded bg-white/80 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200">
                PDF
              </div>
            </>
          ) : videoEmbedSrc ? (
            <>
              <iframe
                className="h-full w-full"
                src={videoEmbedSrc}
                title={`${title} video preview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div className="pointer-events-none absolute right-2 top-2 rounded bg-white/80 px-2 py-0.5 text-xs text-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200">
                Video
              </div>
            </>
          ) : mediaSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mediaSrc}
              alt={mediaAlt ?? `${title} preview`}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-zinc-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.5 5.25A2.25 2.25 0 0 1 6.75 3h10.5A2.25 2.25 0 0 1 19.5 5.25v13.5A2.25 2.25 0 0 1 17.25 21H6.75A2.25 2.25 0 0 1 4.5 18.75V5.25Z" />
              </svg>
              <span className="mt-1 text-xs">Picture / video / PDF</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
