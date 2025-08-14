export default function GameJamEntry1Page() {
	return (
		<main className="mx-auto max-w-5xl px-4 py-10">
			<h1 className="text-2xl font-semibold">Game Jam: Entry 1</h1>
			<p className="mt-3 text-zinc-700 dark:text-zinc-300">Topic: gamejam work</p>

			<section className="mt-6">
				<div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-800">
					<iframe
						className="h-full w-full"
						src="https://www.youtube.com/embed/vvBPwHdoHd8"
						title="Game Jam Entry 1"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
					/>
				</div>
			</section>

			<div className="mt-10 flex gap-4">
				<a className="text-blue-600 dark:text-blue-400" href="/">← Home</a>
			</div>
		</main>
	);
}
