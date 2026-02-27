import dynamic from "next/dynamic";

export const previewMap = {
  "animated-form": dynamic(() =>
    import("@/app/(primary)/components/animated-form/_components/preview").then(
      (m) => m.LivePreviewAnimatedForm
    )
  ),
  "animated-otp": dynamic(() =>
    import("@/app/(primary)/components/animated-otp/_components/preview").then(
      (m) => m.LivePreviewAnimatedOTP
    )
  ),
  "animated-tabs": dynamic(() =>
    import("@/app/(primary)/components/animated-tabs/_components/preview").then(
      (m) => m.LivePreviewAnimatedTabs
    )
  ),
  "bot-detection": dynamic(() =>
    import("@/app/(primary)/components/bot-detection/_components/preview").then(
      (m) => m.LivePreviewBotDetection
    )
  ),
  "expandable-card": dynamic(() =>
    import(
      "@/app/(primary)/components/expandable-card/_components/preview"
    ).then((m) => m.LivePreviewExpandableCard)
  ),
  "framework-agnostic": dynamic(() =>
    import(
      "@/app/(primary)/components/framework-agnostic/_components/preview"
    ).then((m) => m.LivePreviewFrameworkAgnostic)
  ),
  "fraud-card": dynamic(() =>
    import("@/app/(primary)/components/fraud-card/_components/preview").then(
      (m) => m.LivePreviewFraudCard
    )
  ),
  "notification-center": dynamic(() =>
    import(
      "@/app/(primary)/components/notification-center/_components/preview"
    ).then((m) => m.LivePreviewNotificationCenter)
  ),
  "notification-panel": dynamic(() =>
    import(
      "@/app/(primary)/components/notification-panel/_components/preview"
    ).then((m) => m.LivePreviewNotificationPanel)
  ),
  "onboard-card": dynamic(() =>
    import("@/app/(primary)/components/onboard-card/_components/preview").then(
      (m) => m.LivePreviewOnboardCard
    )
  ),
  "security-card": dynamic(() =>
    import("@/app/(primary)/components/security-card/_components/preview").then(
      (m) => m.LivePreviewSecurityCard
    )
  ),
  "social-card": dynamic(() =>
    import("@/app/(primary)/components/social-card/_components/preview").then(
      (m) => m.LivePreviewSocialCard
    )
  ),
  "stats-card": dynamic(() =>
    import("@/app/(primary)/components/stats-card/_components/preview").then(
      (m) => m.LivePreviewStatsCard
    )
  ),
  "text-reveal": dynamic(() =>
    import("@/app/(primary)/components/text-reveal/_components/preview").then(
      (m) => m.LivePreviewTextReveal
    )
  ),
  "text-shimmer": dynamic(() =>
    import("@/app/(primary)/components/text-shimmer/_components/preview").then(
      (m) => m.LivePreviewTextShimmer
    )
  ),
  "vault-lock": dynamic(() =>
    import("@/app/(primary)/components/vault-lock/_components/preview").then(
      (m) => m.LivePreviewVaultLock
    )
  ),
  "stack-ripple": dynamic(() =>
    import("@/app/(primary)/components/stack-ripple/_components/preview").then(
      (m) => m.LivePreviewStackRipple
    )
  ),
  "spectrum-switcher": dynamic(() =>
    import(
      "@/app/(primary)/components/spectrum-switcher/_components/preview"
    ).then((m) => m.LivePreviewSpectrumSwitcher)
  ),
} as const;
