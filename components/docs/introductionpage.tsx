export default function IntroductionPage() {
  return (
    <article className="container mx-auto max-w-6xl py-6 lg:pl-8">
      <div className="space-y-8">
        {/* Header */}
        <div id="introduction" className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Introduction
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            <em>Redefined UI building for developers.</em> Quickly add
            components, themes, and responsive layouts to your app at any scale.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            Forge UI is a collection of beautifully designed, customizable
            components you can <strong>copy and paste</strong> directly into
            your projects. These components are <em>flexible</em>,{" "}
            <em>accessible</em>, and <em>open-source</em>.
          </p>

          <p>
            This is <strong className="text-foreground">NOT</strong> a
            traditional component library. Instead, it&apos;s a toolkit of
            reusable components meant to empower you to create a unique,
            scalable UI without dependency constraints.
          </p>

          <div className="pt-4">
            <h2 className="mb-4 text-xl font-semibold text-foreground">
              What do you mean by not a component library?
            </h2>

            <p className="mb-4">
              Unlike traditional libraries, Forge UI is not available as an
              installable npm package. You{" "}
              <strong>won&apos;t add it as a dependency</strong>; instead, you
              choose and integrate only the components you need by copying and
              pasting them into your codebase. This approach gives you{" "}
              <em>full control over customization</em>, so the components truly
              feel like part of your application.
            </p>

            <p
              id="philosophy"
              className="border-l-2 border-border pl-4 italic text-muted-foreground"
            >
              Use Forge UI as a foundation to build your own tailored component
              libraries.
            </p>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="space-y-4 border-t border-border pt-8">
          <h2 className="text-2xl font-bold tracking-tight">Philosophy</h2>

          <div className="space-y-4 text-base leading-relaxed">
            <p>
              I firmly believe that <em>excellent design</em> plays a crucial
              role in the value of software. It&apos;s one of the primary ways
              to build <strong>trust with users</strong>, especially when
              interacting with people online. Trust is vital for online
              businesses because it&apos;s the first thing a potential customer
              assesses before deciding to make a purchase or provide their
              payment details.
            </p>

            <p>
              <strong className="text-destructive">Bad design</strong>{" "}
              negatively impacts your team&apos;s reputation. It gives the
              impression of being <em>careless</em>, <em>incomplete</em>, and{" "}
              <em>unreliable</em>. It signals that the team lacks consideration
              for the user experience.
            </p>

            <p>
              Effective design suggests that the team is{" "}
              <strong>organized and capable</strong>. It builds confidence that
              they will deliver <em>quality work</em> moving forward.
            </p>
          </div>
        </div>

        {/* Integration Info */}
        <div className="space-y-4 rounded-lg bg-neutral-200/50 p-6 dark:bg-muted/50">
          <p className="text-sm text-muted-foreground">
            <strong>Designed for seamless compatibility</strong> with leading
            frameworks, our solution empowers developers to streamline their
            workflow and create with ease.
          </p>
        </div>
      </div>
    </article>
  );
}
