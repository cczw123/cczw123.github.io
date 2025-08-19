import { ProjectDetails } from "../../components/ProjectDetails";

export default function IGymPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="AirPlay"
        card={{
          title: "AirPlay",
          description:
            "Inclusive, adaptive mixed-reality sports and rehabilitation platform enabling accessible play.",
          href: "https://www.igym.solutions/",
          mediaAlt: "AirPlay",
          badge: "Assistive Tech",
        }}
        overview={`Contributed to accessible XR prototyping and gameplay systems for an inclusive, adaptive sports/rehabilitation platform. Focus on calibration, interaction accessibility, and low-latency visuals.`}
        skills={[
          { label: "Domain", value: "Assistive technology, inclusive play" },
          { label: "Role", value: "XR prototyping, gameplay systems" },
          { label: "Stack", value: "Unity, AR/VR devices" },
          { label: "Link", value: "See product site for details" },
        ]}
      />
    </main>
  );
}
