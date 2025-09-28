"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { CATEGORIES } from "@/config/categories"
import MobileMenu from "@/components/MobileMenu"

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname?.startsWith(href)
  return (
    <Link
      href={href}
      className={[
        "px-3 py-2 rounded-xl text-sm transition",
        "hover:bg-neutral-100 hover:dark:bg-neutral-800",
        active ? "font-medium bg-neutral-100 dark:bg-neutral-800" : "text-neutral-700 dark:text-neutral-200",
      ].join(" ")}
    >
      {label}
    </Link>
  )
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            SleepAudit.io
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/blog" label="Blog" />

            {/* Learn dropdown (CSS-only, click + hover) */}
            <div className="relative group pt-2">
              {/* Make Learn itself clickable */}
              <Link
                href="/learn"
                className="px-3 py-2 rounded-xl text-sm transition hover:bg-neutral-100 hover:dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
                aria-haspopup="menu"
                aria-expanded="false"
              >
                Learn
              </Link>

              {/* The dropdown */}
              <div
                className={[
                  "absolute left-0 top-full w-[360px] z-50",
                  "rounded-2xl border border-neutral-200 dark:border-neutral-800",
                  "bg-white dark:bg-neutral-950 shadow-lg p-2",
                  "opacity-0 invisible translate-y-1",
                  "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                  "group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0",
                  "transition"
                ].join(" ")}
                role="menu"
              >
                {CATEGORIES.map(c => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    role="menuitem"
                    className="block px-3 py-2 rounded-xl hover:bg-neutral-100 hover:dark:bg-neutral-800 text-sm"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink href="/about" label="About" />
          </nav>

          {/* Mobile drawer button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
