import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-20">
        <div className="mb-16 flex items-center justify-between">
          <div className="text-xl font-semibold">Construction Intelligence Platform</div>
          <div className="flex gap-4 text-sm text-slate-300">
            <Link href="/product">Product</Link>
            <Link href="/security">Security</Link>
            <Link href="/login">Login</Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-cyan-400">
              AI Decision Acceleration
            </p>
            <h1 className="mb-6 text-5xl font-bold leading-tight">
              See what is costing your project money right now.
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-slate-300">
              Detect delayed RFIs, prioritize bottlenecks by daily cost exposure,
              and turn construction data into decision intelligence.
            </p>
            <div className="flex gap-4">
              <Link
                href="/login"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-950"
              >
                Client Login
              </Link>
              <Link
                href="/product"
                className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-white"
              >
                Explore Product
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
            <div className="mb-4 text-sm text-slate-400">Live Risk Snapshot</div>
            <div className="space-y-4">
              {[
                ["Structural RFI #104", "$128,000/day", "Waiting 6 days"],
                ["Mechanical Coordination", "$96,000/day", "Waiting 4 days"],
                ["Curtain Wall Submittal", "$72,000/day", "Waiting 5 days"],
              ].map(([title, risk, meta]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="mt-1 text-sm text-slate-400">{meta}</div>
                    </div>
                    <div className="text-right text-cyan-400">{risk}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
