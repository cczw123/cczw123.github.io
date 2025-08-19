import { ProjectDetails } from "../../components/ProjectDetails";

export default function FeastPage() {
  const vimeo = "https://player.vimeo.com/video/1000800913?dnt=1&app_id=122963";
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Empathy in Point Cloud"
        card={{
          title: "Empathy in Point Cloud",
          description:
            "Cross-disciplinary ArtsEngine FEAST project exploring spatial storytelling and interactive media.",
          href: "https://artsengine.engin.umich.edu/feast/spatial-ideas-storytelling-gilpin/",
          mediaAlt: "Empathy in Point Cloud",
          badge: "Research",
          videoEmbedSrc: vimeo,
        }}
        overview={`I contributed XR prototyping and pipeline support for a cross-disciplinary spatial storytelling research effort under ArtsEngine FEAST. `}
        videoEmbedSrc={vimeo}
        skills={[
          { label: "Domain", value: "Spatial storytelling, interactive media" },
          { label: "Role", value: "XR prototyping, pipeline" },
          { label: "Stack", value: "Unreal, 3D asset integration" },
          { label: "Link", value: "See project page for details" },
        ]}
      />
    </main>
  );
}
