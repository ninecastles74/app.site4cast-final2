import { prisma } from "@cip/db";

export default async function AppDashboardPage() {
  const projects = await prisma.project.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Portfolio Overview</h1>
          <p className="mt-2 text-slate-400">
            This is the first internal shell for authenticated users.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Active Projects</div>
            <div className="mt-2 text-4xl font-bold">{projects.length}</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Open High-Risk Issues</div>
            <div className="mt-2 text-4xl font-bold">0</div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="text-sm text-slate-400">Alerts Sent Today</div>
            <div className="mt-2 text-4xl font-bold">0</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h2 className="mb-4 text-xl font-semibold">Projects</h2>
          <div className="space-y-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950 p-4"
              >
                <div>
                  <div className="font-medium">{project.name}</div>
                  <div className="text-sm text-slate-400">{project.type ?? "Unspecified type"}</div>
                </div>
                <div className="text-sm text-cyan-400">{project.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
