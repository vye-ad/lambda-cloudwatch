

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-6">
          Deployment Successful!
        </h1>
        <p className="text-2xl text-gray-200 mb-4">
          Next.js + Docker + GitHub Actions + EC2 + Lambda
        </p>
        <p className="text-lg text-gray-300">
          Commit: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || "local"}
        </p>
        <p className="mt-8 text-sm text-gray-400">
          Built on: {new Date().toLocaleString()}
        </p>
      </div>
    </main>
  );
}