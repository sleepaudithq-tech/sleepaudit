"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, ABOUT_ITEM } from "@/config/categories"

export default function MobileMenu({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  const isActive = (href: string, matchPrefix?: string) =>
    pathname === href || pathname.startsWith((matchPrefix ?? href) + "/")

  return (
    <div role="dialog" aria-label="Menu" className="p-4">
      <div className="space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href, item.matchPrefix)
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onNavigate}
              className={[
                "block rounded-md px-3 py-2 text-base",
                active
                  ? "bg-neutral-800 text-white"
                  : "text-neutral-300 hover:text-white hover:bg-neutral-800/60",
              ].join(" ")}
            >
              {item.label}
            </Link>
          )
        })}
      </div>

      <div className="mt-3 border-t border-neutral-800 pt-3">
        <Link
          href={ABOUT_ITEM.href}
          onClick={onNavigate}
          className="block rounded-md px-3 py-2 text-base text-neutral-300 hover:text-white hover:bg-neutral-800/60"
        >
          {ABOUT_ITEM.label}
        </Link>
      </div>
    </div>
  )
}
