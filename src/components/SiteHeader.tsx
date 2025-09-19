"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const links = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/learn", label: "Learn" },
    { href: "/about", label: "About" },
]

export default function SiteHeader() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
                <Link href="/" className="font-semibold tracking-tight">
                    SleepAudit<span className="text-neutral-400">.io</span>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden gap-6 md:flex">
                    {links.map(({ href, label }) => {
                        const active = pathname === href || (href !== "/" && pathname.startsWith(href))
                        return (
                            <Link
                                key={href}
                                href={href}
                                className={[
                                    "text-sm transition-colors",
                                    active
                                        ? "text-black dark:text-white"
                                        : "text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white",
                                ].join(" ")}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Mobile menu toggle */}
                <button
                    className="md:hidden rounded px-2 py-1 text-sm text-neutral-600 ring-1 ring-neutral-300 dark:text-neutral-300 dark:ring-neutral-700"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                >
                    Menu
                </button>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="border-t border-neutral-200/60 bg-white dark:border-neutral-800 dark:bg-neutral-950 md:hidden">
                    <nav className="mx-auto grid max-w-5xl gap-2 px-4 py-3">
                        {links.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="rounded px-2 py-1 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}
