import FraudCard from "@/app/(primary)/components/fraud-card/_components/fraud-card";
import LivePreviewComponent from "@/components/layout/livepreview";
import React from "react";

const blockedEmails = [
  { email: "bad_actor+1@gamil.com", time: "Aug 9 at 14:09" },
  { email: "spammer123@mailor.com", time: "Aug 10 at 11:23" },
  { email: "fake+prmo@tempmail.com", time: "Aug 11 at 09:45" },
  { email: "bot@disposablemail.org", time: "Aug 12 at 16:02" },
];
const Preview = () => {
  return (
    <LivePreviewComponent>
      <FraudCard blockedEmails={blockedEmails} />
    </LivePreviewComponent>
  );
};

export default Preview;
