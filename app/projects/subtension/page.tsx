import { ProjectDetails } from "../../components/ProjectDetails";

export default function SubtensionPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Subtension"
        year={2022}
        card={{
          title: "Subtension",
          description:
            "Outfit, crew and command your submarine to save what's left of humanity in a real-time strategy epic inspired by FTL.",
          href: "https://wolverinesoft-studio.itch.io/subtension",
          mediaSrc: "https://img.itch.zone/aW1nLzEwNzI5MDE5LnBuZw==/original/X0ATzf.png",
          mediaAlt: "Subtension cover art",
          badge: "PC",
        }}
        overview={`Subtension was created by a cross-disciplinary student team at the University of Michigan's WolverineSoft Studio. 

This two-semester project (May–December 2022) serves as an educational case study of FTL: Faster Than Light. Players outfit, crew, and command a submarine to survive beneath the seas of a ruined Earth, managing systems in real-time combat and narrative encounters.`}
        skills={[
          { label: "Genre", value: "RTS, roguelike inspired" },
          { label: "Role", value: "Programming / Art (team contributions)" },
          { label: "Engine", value: "Custom/varied (student project)" },
          { label: "Platforms", value: "Windows" },
        ]}
      />
    </main>
  );
}
