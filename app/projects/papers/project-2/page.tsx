import { ProjectDetails } from "../../../components/ProjectDetails";

export default function Project2PdfPage() {
  const card = {
  title: "3D Modeling",
  description: "PDF document for 3D Modeling.",
    href: "/projects/papers/project-2",
  pdfSrc: "/docs/project-2.pdf",
    mediaAlt: "PDF preview",
    badge: "PDF",
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        card={card}
        heading="3D Modeling"
        overview="This page presents the PDF for 3D Modeling. Use the Open PDF button for a full-window view."
        pdfSrc="/docs/project-2.pdf"
      />
    </main>
  );
}
