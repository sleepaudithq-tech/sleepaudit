"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, ABOUT_ITEM } from "@/config/categories"

export default function Nav() {
  const pathname = usePathname()

  const isActive = (href: string, matchPrefix?: string) => {
    const base = matchPrefix ?? href
    // mark active for exact match or any subpath
    return pathname === href || pathname.startsWith(base + "/")
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-900/20 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          SleepAudit.io
        </Link>

        {/* Primary nav */}
        <nav aria-label="Primary" className="hidden gap-4 md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href, item.matchPrefix)
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-md px-3 py-1.5 text-sm transition-colors",
                  active
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-800/60",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={ABOUT_ITEM.href}
            className="rounded-md px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-neutral-800/60 transition-colors"
          >
            {ABOUT_ITEM.label}
          </Link>
        </div>

        {/* Mobile toggle (kept as-is; the drawer component renders the list) */}
        <div className="md:hidden">
          {/* If you already have a MobileMenu button component, keep it here */}
        </div>
      </div>
    </header>
  )
}
