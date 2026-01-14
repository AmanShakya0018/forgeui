import { LivePreviewAnimatedForm } from "@/app/(primary)/components/animated-form/_components/preview";
import { LivePreviewAnimatedOTP } from "@/app/(primary)/components/animated-otp/_components/preview";
import { LivePreviewAnimatedTabs } from "@/app/(primary)/components/animated-tabs/_components/preview";
import { LivePreviewBotDetection } from "@/app/(primary)/components/bot-detection/_components/preview";
import { LivePreviewExpandableCard } from "@/app/(primary)/components/expandable-card/_components/preview";
import { LivePreviewFrameworkAgnostic } from "@/app/(primary)/components/framework-agnostic/_components/preview";
import { LivePreviewFraudCard } from "@/app/(primary)/components/fraud-card/_components/preview";
import { LivePreviewNotificationCenter } from "@/app/(primary)/components/notification-center/_components/preview";
import { LivePreviewOnboardCard } from "@/app/(primary)/components/onboard-card/_components/preview";
import { LivePreviewSecurityCard } from "@/app/(primary)/components/security-card/_components/preview";
import { LivePreviewSocialCard } from "@/app/(primary)/components/social-card/_components/preview";
import { LivePreviewStatsCard } from "@/app/(primary)/components/stats-card/_components/preview";
import { LivePreviewTextReveal } from "@/app/(primary)/components/text-reveal/_components/preview";
import { LivePreviewTextShimmer } from "@/app/(primary)/components/text-shimmer/_components/preview";
import { LivePreviewVaultLock } from "@/app/(primary)/components/vault-lock/_components/preview";

export const previewMap = {
  "animated-form": LivePreviewAnimatedForm,
  "animated-otp": LivePreviewAnimatedOTP,
  "animated-tabs": LivePreviewAnimatedTabs,
  "bot-detection": LivePreviewBotDetection,
  "expandable-card": LivePreviewExpandableCard,
  "framework-agnostic": LivePreviewFrameworkAgnostic,
  "fraud-card": LivePreviewFraudCard,
  "notification-center": LivePreviewNotificationCenter,
  "onboard-card": LivePreviewOnboardCard,
  "security-card": LivePreviewSecurityCard,
  "social-card": LivePreviewSocialCard,
  "stats-card": LivePreviewStatsCard,
  "text-reveal": LivePreviewTextReveal,
  "text-shimmer": LivePreviewTextShimmer,
  "vault-lock": LivePreviewVaultLock,
} as const;
