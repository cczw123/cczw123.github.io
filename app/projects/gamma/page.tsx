import { ProjectDetails } from "../../components/ProjectDetails";

export default function GammaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Forrest VR (Unreal)"
        card={{
          title: "Forrest VR",
          description:
            "Large-scale Unreal project focusing on world partition, terrain tools, and advanced C++ techniques. Tools: Git, Rider.",
          href: "https://www.youtube.com/watch?v=aWyYdarUtEk",
          mediaSrc: "https://img.youtube.com/vi/aWyYdarUtEk/maxresdefault.jpg",
          mediaAlt: "Forrest VR YouTube thumbnail",
          badge: "Unreal Engine",
        }}
        videoEmbedSrc="https://www.youtube.com/embed/aWyYdarUtEk?si=MXEsZDyUF_Y4_ybs"
        skills={[
          { label: "Game Engine", value: "Unreal Engine" },
          { label: "Programming", value: "C++" },
          { label: "Techniques", value: "World Partition, Terrain tools" },
          { label: "Tools", value: "Git, Rider" },
        ]}
      />
    </main>
  );
}
