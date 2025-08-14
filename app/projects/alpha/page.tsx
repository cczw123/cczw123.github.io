import { ProjectDetails } from "../../components/ProjectDetails";

export default function AlphaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="VR Game (Unreal)"
        card={{
          title: "VR Game",
          description:
            "Unreal Engine project using C++ and Blueprints. Focused on event handling, class inheritance, and actor components. Tools: Git, Rider.",
          href: "https://www.youtube.com/watch?v=LfFMzvtaSfI",
          mediaSrc: "https://img.youtube.com/vi/LfFMzvtaSfI/maxresdefault.jpg",
          mediaAlt: "VR Game YouTube thumbnail",
          badge: "Unreal Engine",
        }}
        videoEmbedSrc="https://www.youtube.com/embed/LfFMzvtaSfI?si=9fCtMmca2GgMzTw6"
        skills={[
          { label: "Game Engine", value: "Unreal Engine" },
          { label: "Programming", value: "C++, Blueprints" },
          { label: "Techniques", value: "Event handling, class inheritance, actor component" },
          { label: "Tools", value: "Git, Rider" },
        ]}
      />
    </main>
  );
}
