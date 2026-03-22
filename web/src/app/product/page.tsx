export default function ProductPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-4 text-4xl font-bold">Product</h1>
        <p className="mb-8 max-w-3xl text-slate-300">
          This platform helps commercial construction teams detect decision bottlenecks,
          estimate financial exposure, and surface the highest-risk unresolved issues.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Financial Gravity Dashboard",
              body: "Rank issues by cost per day, not just by age or status.",
            },
            {
              title: "AI Issue Analysis",
              body: "Classify RFIs into trade, urgency, issue type, and blocked scope.",
            },
            {
              title: "Alerting",
              body: "Escalate the right issue to the right party at the right time.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-slate-400">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
