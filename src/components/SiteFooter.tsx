export default function SiteFooter() {
    return (
        <footer className="mt-16 border-t border-neutral-200/60 dark:border-neutral-800">
            <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="grid gap-6 md:grid-cols-3">
                    <div>
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">SleepAudit.io</div>
                        <p className="mt-2">
                            Evidence-based sleep guides and independent product reviews.
                        </p>
                    </div>

                    <nav className="grid gap-2 text-sm">
                        <a href="/blog" className="hover:underline">Blog</a>
                        <a href="/cooling" className="hover:underline">Cooling Hub</a>
                        <a href="/about" className="hover:underline">About</a>
                        <a href="mailto:hello@sleepaudit.io" className="hover:underline">Contact</a>
                        <a href="/disclosure" className="hover:underline">Disclosure</a>
                    </nav>

                    <div className="text-xs">
                        <div className="font-medium text-neutral-900 dark:text-neutral-100">Stay Updated</div>
                        <p className="mt-2">New guides weekly. Follow along as we test what actually helps sleep.</p>
                    </div>
                </div>

                <div className="mt-8 text-xs text-neutral-500">
                    © {new Date().getFullYear()} SleepAudit.io
                </div>
            </div>
        </footer>
    )
}
