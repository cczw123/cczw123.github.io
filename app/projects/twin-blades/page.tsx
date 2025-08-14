import { ProjectDetails } from "../../components/ProjectDetails";

export default function TwinBladesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Twin Blades' Vengeance"
        year={2022}
        card={{
          title: "Twin Blades' Vengeance",
          description:
            "A 2-player 2.5D side-scroller beat-em-up inspired by classics like TMNT and Streets of Rage.",
          href: "https://wolverinesoft-studio.itch.io/twin-blades",
          mediaSrc: "https://img.itch.zone/aW1nLzg2ODYzMzEucG5n/original/%2Bg23O5.png",
          mediaAlt: "Twin Blades' Vengeance cover art",
          badge: "PC",
        }}
        overview={`Built by a 25-person team at WolverineSoft Studio (Jan–Apr 2022), this educational case study channels the feel of arcade beat-em-ups.

Fight across Argent City solo or with a friend, combining precise combat, co-op dynamics, and stylish visuals.`}
        skills={[
          { label: "Genre", value: "2.5D side-scroller, beat-em-up" },
          { label: "Role", value: "Programming / Art (team contributions)" },
          { label: "Engine", value: "Unity (typical for studio projects)" },
          { label: "Platforms", value: "Windows, macOS" },
        ]}
      />
    </main>
  );
}
