export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 text-4xl font-bold">Security</h1>
        <ul className="space-y-3 text-slate-300">
          <li>Tenant-isolated data model</li>
          <li>Role-based access control</li>
          <li>Audit logs for sensitive actions</li>
          <li>Signed uploads and controlled object storage</li>
          <li>Encrypted secrets and environment management</li>
        </ul>
      </div>
    </main>
  );
}
