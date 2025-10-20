export default function LoadingCategory() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <div className="h-8 w-64 animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
        <div className="mt-3 h-4 w-[60%] animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800"
          >
            <div className="aspect-[16/9] w-full animate-pulse bg-neutral-200 dark:bg-neutral-800" />
            <div className="space-y-2 p-4">
              <div className="h-5 w-[80%] animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-[95%] animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-4 w-[70%] animate-pulse rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

