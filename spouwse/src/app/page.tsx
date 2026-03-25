import { HeartHandshake, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { WaitlistForm } from "@/components/waitlist-form";

const features = [
  {
    title: "Relationship intelligence",
    description:
      "Practical guidance for better communication, deeper connection, and long-term stability.",
    icon: HeartHandshake,
  },
  {
    title: "Real-life scenario coaching",
    description:
      "Get help navigating conflict, emotional distance, unmet needs, and everyday relationship pressure.",
    icon: MessageSquareText,
  },
  {
    title: "Modern feminine partnership tools",
    description:
      "Learn how to express needs clearly, build warmth, and strengthen the emotional tone of your relationship.",
    icon: Sparkles,
  },
  {
    title: "Private, structured, actionable",
    description:
      "A calm, intelligent framework for women who want stronger marriages and healthier homes.",
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.22),transparent_35%),linear-gradient(180deg,#050816_0%,#070b1a_45%,#04060f_100%)]">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-xl font-semibold tracking-tight">Spouwse</div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
            Early Access
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60 backdrop-blur">
            The operating system for stronger relationships
          </div>

          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Help women build better marriages with clarity, warmth, and emotional intelligence.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/70">
              Spouwse is a modern relationship platform for women who want stronger partnerships,
              better communication, more peace at home, and deeper long-term connection.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-white/60">
            <div className="rounded-full border border-white/10 px-4 py-2">Communication coaching</div>
            <div className="rounded-full border border-white/10 px-4 py-2">Marriage education</div>
            <div className="rounded-full border border-white/10 px-4 py-2">Relationship tools</div>
          </div>
        </div>

        <div>
          <WaitlistForm />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/50">Why Spouwse</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Relationship education designed for the real world.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/20"
              >
                <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                  <Icon className="h-5 w-5 text-white/80" />
                </div>
                <h3 className="mb-2 text-xl font-medium text-white">{feature.title}</h3>
                <p className="leading-7 text-white/65">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/50">Step 1</p>
              <h3 className="mb-2 text-xl font-medium">Understand what’s happening</h3>
              <p className="leading-7 text-white/65">
                Learn how conflict, emotional disconnection, and unmet needs show up in everyday relationships.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/50">Step 2</p>
              <h3 className="mb-2 text-xl font-medium">Apply better communication</h3>
              <p className="leading-7 text-white/65">
                Replace reactive patterns with calmer, clearer, more effective ways of speaking and asking.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <p className="mb-3 text-sm uppercase tracking-[0.18em] text-white/50">Step 3</p>
              <h3 className="mb-2 text-xl font-medium">Build a stronger marriage</h3>
              <p className="leading-7 text-white/65">
                Use guided frameworks to create more peace, more trust, and a deeper sense of partnership over time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
