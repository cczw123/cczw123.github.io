import { ProjectDetails } from "../../components/ProjectDetails";

export default function BloomRootsOfRenewalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Bloom: Roots of Renewal"
        year={2021}
        card={{
          title: "Bloom: Roots of Renewal",
          description:
            "An expansion to Bloom: Tome of Power (2020). Explore new areas, weapons, and enemies in this Quake-inspired case study.",
          href: "https://wolverinesoft-studio.itch.io/bloom-roots-of-renewal",
          mediaSrc: "https://img.itch.zone/aW1nLzc2MzYxMjUucG5n/original/i7GxKu.png",
          mediaAlt: "Bloom: Roots of Renewal cover art",
          badge: "PC",
        }}
        overview={`A 20-person team at WolverineSoft Studio expanded on the original Bloom, drawing inspiration from Bethesda's Quake and the broader boomer-shooter genre.

Development ran from Sep–Dec 2021, adding new weapons, areas, enemies, and polish while serving as an educational case study.`}
        skills={[
          { label: "Genre", value: "Retro FPS, expansion content" },
          { label: "Role", value: "Art / Programming (team contributions)" },
          { label: "Engine", value: "Unity (typical for studio projects)" },
          { label: "Platforms", value: "Windows, macOS" },
        ]}
      />
    </main>
  );
}
