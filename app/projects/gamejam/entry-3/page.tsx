export default function GameJamEntry3Page() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Game Jam: Entry 3 – Big Whale&Shark</h1>
      <p className="mt-3 text-zinc-700 dark:text-zinc-300">Topic: gamejam work</p>

      <div className="mt-6 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://img.itch.zone/aW1hZ2UvMTY1NDAwMS85NzM4ODMxLnBuZw==/original/IsdQgR.png"
          alt="Big Whale&Shark cover"
          className="w-full object-cover"
        />
      </div>

      <p className="mt-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
        A downloadable game. This atmospheric jam entry explores a monochrome, procedurally generated Möbius-like world with
        themes of healing and courage.
      </p>

      <div className="mt-10 flex gap-4">
        <a className="text-blue-600 dark:text-blue-400" href="/">← Home</a>
        <a className="text-blue-600 dark:text-blue-400" href="https://nakajima-yuto.itch.io/big-whaleshark" target="_blank" rel="noreferrer">Itch.io</a>
      </div>
    </main>
  );
}
