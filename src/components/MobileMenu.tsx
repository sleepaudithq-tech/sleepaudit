"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CATEGORIES } from "@/config/categories"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  // Lock body scroll + focus the close button when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
      closeBtnRef.current?.focus()
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  // Close on Esc
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="md:hidden">
      <button
        onClick={openMenu}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="inline-flex items-center px-3 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
      >
        Menu
      </button>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div
            className={[
              "absolute right-0 top-0 h-full w-[82%] max-w-sm",
              "bg-white dark:bg-neutral-950 border-l border-neutral-200 dark:border-neutral-800",
              "shadow-xl p-4 transform transition-transform duration-200 translate-x-0",
            ].join(" ")}
          >
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Menu</span>
              <button
                ref={closeBtnRef}
                onClick={closeMenu}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                ✕
              </button>
            </div>

            <nav className="mt-4">
              <div className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Primary
              </div>
              <div className="mt-2 grid">
                <Link
                  href="/blog"
                  onClick={closeMenu}
                  className="px-2 py-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-900"
                >
                  Blog
                </Link>
                <Link
                  href="/learn"
                  onClick={closeMenu}
                  className="px-2 py-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-900"
                >
                  Learn
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="px-2 py-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-900"
                >
                  About
                </Link>
              </div>

              <div className="mt-6 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Categories
              </div>
              <div className="mt-2 grid">
                {CATEGORIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    onClick={closeMenu}
                    className="px-2 py-2 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-900"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

