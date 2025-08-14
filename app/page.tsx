"use client";
import React from "react";
import { ProjectCard, type ProjectCardProps } from "./components/ProjectCard";

function Divider() {
  return <div className="my-6 h-px w-full bg-zinc-200 dark:bg-zinc-800" />;
}

export default function Page() {
  const personalName = "Jacky Song";
  const introductionText = `XR and game developer creating interactive experiences across AR/VR and real-time 3D. I blend gameplay programming with systems/architecture and content integration (3D models, video, audio, images), with a focus on performance and accessibility. Comfortable with Unity and Unreal, C#/C++, rapid prototyping, and shipping to mobile and desktop platforms. Below are representative projects.`;

  // Stable id for keys
  type Project = ProjectCardProps & { id: string };

  const projects: Project[] = [
    {
      id: "alpha",
      title: "VR Game",
      description:
        "Unreal Engine project using C++ and Blueprints. Focused on event handling, class inheritance, and actor components. Tools: Git, Rider.",
      href: "/projects/alpha",
      mediaSrc: "https://img.youtube.com/vi/LfFMzvtaSfI/maxresdefault.jpg",
      mediaAlt: "VR Game YouTube thumbnail",
      badge: "Unreal Engine",
    },
    {
      id: "beta",
      title: "AR Game",
      description:
        "Unity AR project with event handling, file loading/parsing, Mapbox, AR simulation, reinforcement learning, and custom shaders.",
      href: "/projects/beta",
      mediaSrc: "https://img.youtube.com/vi/BhIAExCUGQ0/maxresdefault.jpg",
      mediaAlt: "AR Game YouTube thumbnail",
      badge: "Unity",
    },
    {
      id: "gamma",
      title: "Forrest VR",
      description:
        "Large-scale Unreal project focusing on world partition, terrain tools, and advanced C++ techniques. Tools: Git, Rider.",
      href: "/projects/gamma",
      mediaSrc: "https://img.youtube.com/vi/aWyYdarUtEk/maxresdefault.jpg",
      mediaAlt: "Forrest VR YouTube thumbnail",
      badge: "Unreal Engine",
    },
    {
      id: "subtension",
      title: "Subtension",
      description:
        "Outfit, crew, and command a submarine in a real-time strategy epic inspired by FTL. Student project spanning two semesters.",
      href: "/projects/subtension",
      mediaSrc: "https://img.itch.zone/aW1nLzEwNzI5MDE5LnBuZw==/original/X0ATzf.png",
      mediaAlt: "Subtension cover art",
      badge: "PC",
    },
    {
      id: "twin-blades",
      title: "Twin Blades' Vengeance",
      description:
        "Two-player 2.5D side-scroller beat-em-up inspired by TMNT and Streets of Rage. Build, brawl, and co-op across Argent City.",
      href: "/projects/twin-blades",
      mediaSrc: "https://img.itch.zone/aW1nLzg2ODYzMzEucG5n/original/%2Bg23O5.png",
      mediaAlt: "Twin Blades' Vengeance cover art",
      badge: "PC",
    },
    {
      id: "bloom",
      title: "Bloom: Roots of Renewal",
      description:
        "Expansion to Bloom: Tome of Power. Quake-inspired retro FPS with new areas, weapons, and enemies.",
      href: "/projects/bloom-roots-of-renewal",
      mediaSrc: "https://img.itch.zone/aW1nLzc2MzYxMjUucG5n/original/i7GxKu.png",
      mediaAlt: "Bloom: Roots of Renewal cover art",
      badge: "PC",
    },
    {
      id: "jam-1",
      title: "Game Jam – Entry 1",
      description: "Prototype built during a game jam. Topic: gamejam work.",
      href: "/projects/gamejam/entry-1",
      mediaSrc: "https://img.youtube.com/vi/vvBPwHdoHd8/hqdefault.jpg",
      mediaAlt: "Game Jam entry 1 thumbnail",
      badge: "Game Jam",
    },
    {
      id: "jam-2",
      title: "Game Jam – Entry 2",
      description: "Prototype built during a game jam. Topic: gamejam work.",
      href: "/projects/gamejam/entry-2",
      mediaSrc: "https://img.youtube.com/vi/zaD83A9-IRs/hqdefault.jpg",
      mediaAlt: "Game Jam entry 2 thumbnail",
      badge: "Game Jam",
    },
    {
      id: "jam-3",
      title: "Game Jam – Entry 3",
      description: "Prototype built during a game jam. Topic: gamejam work.",
      href: "/projects/gamejam/entry-3",
      mediaSrc:
        "https://img.itch.zone/aW1hZ2UvMTY1NDAwMS85NzM4ODMxLnBuZw==/original/IsdQgR.png",
      mediaAlt: "Game Jam entry 3 thumbnail",
      badge: "Game Jam",
    },
    {
      id: "pdf-1",
      title: "3D Modeling",
      description: "PDF document for 3D Modeling.",
      href: "/projects/papers/project-1",
      pdfSrc: "/docs/project-1.pdf",
      mediaAlt: "3D Modeling PDF preview",
      badge: "PDF",
    },
    {
      id: "pdf-2",
      title: "3D Modeling",
      description: "PDF document for 3D Modeling.",
      href: "/projects/papers/project-2",
      pdfSrc: "/docs/project-2.pdf",
      mediaAlt: "3D Modeling PDF preview",
      badge: "PDF",
    },
    {
      id: "pdf-3",
      title: "3D Modeling",
      description: "PDF document for 3D Modeling.",
      href: "/projects/papers/project-3",
      pdfSrc: "/docs/project-3.pdf",
      mediaAlt: "3D Modeling PDF preview",
      badge: "PDF",
    },
  ];

  // Render original order on the server; shuffle after mount to avoid hydration mismatch
  const [shuffled, setShuffled] = React.useState<Project[]>(projects);
  const [shuffleNonce, setShuffleNonce] = React.useState(0);
  React.useEffect(() => {
    const arr = projects.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setShuffled(arr);
    setShuffleNonce((n) => n + 1);
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <header className="mb-8 flex items-start justify-between gap-6">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-zinc-500">Name:</p>
          <h1 className="text-3xl font-bold">{personalName}</h1>
          <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {introductionText}
          </p>
        </div>

        <div className="h-40 w-40 shrink-0 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/avtar.png"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
      </header>

      <section className="space-y-6">
        {shuffled.map((p, idx) => (
          <React.Fragment key={`${p.id}-${shuffleNonce}`}>
            <ProjectCard {...p} />
            {idx < shuffled.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
}
