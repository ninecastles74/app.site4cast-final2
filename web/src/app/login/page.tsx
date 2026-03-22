export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="mb-2 text-3xl font-bold">Client Login</h1>
        <p className="mb-6 text-sm text-slate-400">
          Auth wiring comes in Step 3. This placeholder keeps routing clean now.
        </p>

        <form className="space-y-4">
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
            placeholder="Email address"
          />
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
            placeholder="Password"
            type="password"
          />
          <button
            type="button"
            className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950"
          >
            Sign in
          </button>
        </form>
      </div>
    </main>
  );
}
