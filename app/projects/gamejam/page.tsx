import { ProjectCard } from "../../components/ProjectCard";

export default function GameJamPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Game Jam Works</h1>
      <p className="mt-3 text-zinc-700 dark:text-zinc-300">
        Selected works from game jams. Short prototypes focusing on tight scopes, novel mechanics, and fast iteration.
      </p>

      <section className="mt-8 space-y-6">
        <ProjectCard
          title="Entry 1"
          description="Prototype exploring a core mechanic."
          href="/projects/gamejam/entry-1"
          mediaSrc="https://img.youtube.com/vi/vvBPwHdoHd8/hqdefault.jpg"
          mediaAlt="Game Jam Entry 1 thumbnail"
          badge="Game Jam"
        />
        <ProjectCard
          title="Entry 2"
          description="Prototype with a different pacing and loop."
          href="/projects/gamejam/entry-2"
          mediaSrc="https://img.youtube.com/vi/zaD83A9-IRs/hqdefault.jpg"
          mediaAlt="Game Jam Entry 2 thumbnail"
          badge="Game Jam"
        />
      </section>

      <a className="mt-10 inline-block text-blue-600 dark:text-blue-400" href="/">← Back</a>
    </main>
  );
}
