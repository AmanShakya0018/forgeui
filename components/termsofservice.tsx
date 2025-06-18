"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const TermsOfServicePage = () => {
  return (
    <article className="mx-auto max-w-[95.8rem] border-x">
      <div className="container mx-auto max-w-5xl px-4 py-12 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms of Service
            </h1>
            <p className="leading-relaxed text-muted-foreground">
              These terms govern your use of our website and outline the
              guidelines to ensure a <em>safe and fair experience</em> for all
              users.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/60" />

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Introduction
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  By accessing this website, you confirm that you{" "}
                  <strong>agree to be bound</strong> by these terms of service.
                  If you do not agree with any part of these terms, you should{" "}
                  <em>discontinue using the website immediately</em>. The
                  following terms ensure that all interactions on our platform
                  remain <strong>respectful and lawful</strong>.
                </p>
              </div>
            </section>

            {/* License */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">License</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  All <strong>intellectual property rights</strong> for the
                  content on this website belong to us or our licensors unless
                  explicitly stated otherwise. You are granted permission to
                  access and use the material for{" "}
                  <em>personal and non-commercial purposes</em>, subject to the
                  limitations outlined in these terms.
                </p>
              </div>
            </section>

            {/* User Contributions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                User Contributions
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Our website may allow users to share feedback, post comments,
                  or upload materials in designated areas. Any contributions
                  made by users <em>reflect their own opinions</em> and are{" "}
                  <strong>not endorsed by us</strong>. We reserve the right to
                  monitor and remove any content that violates these terms or
                  applicable laws.
                </p>
              </div>
            </section>

            {/* Third-Party Links */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Third-Party Links
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Organizations such as government agencies, search engines, and
                  news outlets may link to our website without prior permission.
                  However, these links{" "}
                  <strong>do not imply any endorsement</strong> of the linked
                  content. We are <em>not responsible</em> for the practices or
                  content of any external websites.
                </p>
              </div>
            </section>

            {/* Liability Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Liability Disclaimer
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We are <strong>not liable</strong> for any content published
                  on external websites that may link to our platform. By linking
                  to our website, you agree to{" "}
                  <em>indemnify us against any claims</em> arising from content
                  associated with your website. We do not accept responsibility
                  for any potential damages or losses incurred from your use of
                  this site.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="mt-12 rounded-lg border border-border/60 bg-neutral-200/30 p-6 dark:bg-muted/30">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Have questions about these terms?{" "}
                  <em>We&apos;re here to help.</em>
                </p>
              </div>
              <Button asChild>
                <a
                  href="https://twitter.com/AmanShakya0018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Support
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TermsOfServicePage;
