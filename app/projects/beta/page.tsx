import { ProjectDetails } from "../../components/ProjectDetails";

export default function BetaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="AR Game (Unity)"
        card={{
          title: "AR Game",
          description:
            "Unity AR project with event handling, file loading/parsing, Mapbox, AR simulation, reinforcement learning, and custom shaders. Tools: Git, Rider.",
          href: "https://www.youtube.com/watch?v=BhIAExCUGQ0",
          mediaSrc: "https://img.youtube.com/vi/BhIAExCUGQ0/maxresdefault.jpg",
          mediaAlt: "AR Game YouTube thumbnail",
          badge: "Unity",
        }}
        videoEmbedSrc="https://www.youtube.com/embed/BhIAExCUGQ0?si=klIvvYYKS9HTDCV5"
        skills={[
          { label: "Game Engine", value: "Unity" },
          { label: "Programming", value: "C#" },
          { label: "Techniques", value: "Event handling, file loading and parsing, Mapbox, AR simulation, reinforcement learning, custom shaders" },
          { label: "Tools", value: "Git, Rider" },
        ]}
      />
    </main>
  );
}
