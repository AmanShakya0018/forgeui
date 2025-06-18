"use client";
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <article className="mx-auto max-w-[95.8rem] border-x">
      <div className="container mx-auto max-w-5xl px-4 py-12 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Privacy Policy
              </h1>
            </div>
            <p className="leading-relaxed text-muted-foreground">
              Your privacy is <strong>important to us</strong>. Currently, we do
              not collect any personal data from users as it is{" "}
              <em>not required</em> for the features available on our platform.
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/60" />

          {/* Highlight Box */}
          <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-6">
            <div className="flex items-start gap-3">
              <Shield className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-semibold text-primary">
                  Privacy First Approach
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We believe in <em>privacy by design</em> - no data collection
                  means no privacy concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  We respect your privacy and are committed to ensuring that
                  your personal information remains <strong>secure</strong>. At
                  this time, we <em>do not collect any personal data</em>{" "}
                  directly from our users. This approach allows us to provide
                  our services with <strong>minimal intrusion</strong> and
                  ensures your data stays entirely within your control.
                </p>
              </div>
            </section>

            {/* No Data Collection */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                No Data Collection
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  Our platform is designed to provide its current features{" "}
                  <strong>without requiring any personal information</strong>{" "}
                  from users. As a result, you can use our services without
                  sharing any data with us. We believe in{" "}
                  <em>transparency and simplicity</em>, ensuring that your
                  privacy is preserved by default.
                </p>
                <p>
                  By not collecting data, we <strong>eliminate risks</strong>{" "}
                  associated with data breaches or misuse, further enhancing
                  your trust in our services.
                </p>
              </div>
            </section>

            {/* Future Updates */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight">
                Future Updates
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p>
                  If we introduce new features in the future that require the
                  collection of personal data, we will{" "}
                  <strong>update this policy accordingly</strong> and ensure
                  that you are <em>informed in advance</em>. Any such changes
                  will adhere to applicable laws and prioritize your privacy and
                  security.
                </p>
                <p>
                  Additionally, we will provide <strong>clear options</strong>{" "}
                  for you to control the sharing of your information, ensuring
                  that you remain in <em>full control of your data</em> at all
                  times. Our goal is to maintain the highest level of
                  transparency and user empowerment, building a relationship
                  based on <strong>trust and respect</strong>.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="mt-12 rounded-lg border border-border/60 bg-neutral-200/30 p-6 dark:bg-muted/30">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Get in Touch</h3>
              <p className="text-sm text-muted-foreground">
                If you have any questions or feedback about this policy,{" "}
                <em>feel free to contact us</em>. We are always open to hearing
                from our users and value your input in helping us improve our
                platform and policies.
              </p>
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

export default PrivacyPolicyPage;
