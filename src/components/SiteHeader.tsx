"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "@/components/MobileMenu"
import { NAV_ITEMS, ABOUT_ITEM } from "@/config/categories"

export default function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string, matchPrefix?: string) => {
    const base = matchPrefix ?? href
    return pathname === href || pathname.startsWith(base + "/")
  }

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            SleepAudit.io
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href, item.matchPrefix)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "px-3 py-2 rounded-xl text-sm transition",
                    "hover:bg-neutral-100 hover:dark:bg-neutral-800",
                    active ? "font-medium bg-neutral-100 dark:bg-neutral-800" : "text-neutral-700 dark:text-neutral-200",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}

            <Link
              href={ABOUT_ITEM.href}
              className="px-3 py-2 rounded-xl text-sm transition text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 hover:dark:bg-neutral-800"
            >
              {ABOUT_ITEM.label}
            </Link>
          </nav>

          {/* Mobile drawer button */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
