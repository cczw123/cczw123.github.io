import { ProjectDetails } from "../../components/ProjectDetails";

export default function BilibiliGamePage() {
  const videoUrl = "https://player.bilibili.com/player.html?bvid=BV1Ga411T77P&high_quality=1&autoplay=0";

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <ProjectDetails
        heading="Action Game Prototype"
        card={{
          title: "Action Game Prototype",
          description:
            "Gameplay prototype showcasing combat and movement. Video hosted on Bilibili.",
          href: "https://www.bilibili.com/video/BV1Ga411T77P/",
          mediaSrc: "https://i1.hdslb.com/bfs/archive/0b11f2c3c1b0b9b5e93b10b7b21d5110f6b7542c.jpg",
          mediaAlt: "Action Game Prototype thumbnail",
          badge: "Prototype",
        }}
        videoEmbedSrc={videoUrl}
        skills={[
          { label: "Role", value: "Gameplay programming" },
          { label: "Focus", value: "Combat, movement, camera" },
          { label: "Engine", value: "Unity" },
        ]}
      />
    </main>
  );
}
