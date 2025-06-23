import SocialCard from "@/app/(primary)/components/social-card/_components/social-card";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { GiStrikingDiamonds } from "react-icons/gi";

const TextRenderingPreview = () => {
  return (
    <LivePreviewComponent>
      <SocialCard
        image="/pfp.png"
        title="Social Card"
        name="creator.exe"
        pitch="Explore my latest projects and connect for collaboration opportunities"
        icon={<GiStrikingDiamonds />}
        buttons={[
          {
            label: "Twitter",
            icon: <FaXTwitter />,
            link: "https://x.com/amanshakya0018",
          },
          {
            label: "Github",
            icon: <FaGithub />,
            link: "https://github.com/amanshakya0018",
          },
        ]}
      />
    </LivePreviewComponent>
  );
};

export default TextRenderingPreview;
