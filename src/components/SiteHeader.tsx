"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import MobileMenu from "@/components/MobileMenu"
import TopicsMenu from "@/components/nav/TopicsMenu"
import { NAV_ITEMS, ABOUT_ITEM } from "@/config/categories"

export default function SiteHeader() {
  const pathname = usePathname()

  const isActive = (href: string, matchPrefix?: string) => {
    const base = matchPrefix ?? href
    return pathname === href || pathname.startsWith(base + "/")
  }

  return (
    <header className="sticky top-0 z-50 h-[var(--sa-header-h)] border-b border-neutral-200/70 bg-white/80 dark:bg-neutral-950/80 backdrop-blur dark:border-neutral-800">
      <div className="flex h-full w-full items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="text-[15px] sm:text-base lg:text-lg font-bold tracking-tight text-neutral-100">
          SleepAudit.io
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href, item.matchPrefix)
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "inline-flex h-9 items-center px-2 text-sm whitespace-nowrap transition",
                    active
                      ? "font-semibold text-neutral-100"
                      : "text-neutral-300 hover:text-neutral-100",
                  ].join(" ")}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Topics dropdown */}
            <TopicsMenu />

            <Link
              href={ABOUT_ITEM.href}
              className="inline-flex h-9 items-center px-2 text-sm whitespace-nowrap transition text-neutral-300 hover:text-neutral-100"
            >
              {ABOUT_ITEM.label}
            </Link>
          </nav>

        {/* Mobile drawer button */}
        <MobileMenu />
      </div>
    </header>
  )
}
