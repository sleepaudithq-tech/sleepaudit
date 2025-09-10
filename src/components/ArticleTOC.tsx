"use client"

import { useEffect, useState } from "react"

type Item = { id: string; text: string; level: 2 | 3 }

export default function ArticleTOC() {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        const article = document.querySelector("article")
        if (!article) return

        const hs = Array.from(article.querySelectorAll<HTMLHeadingElement>("h2, h3"))
        hs.forEach(h => {
            if (!h.id) {
                const slug = h.textContent?.toLowerCase().replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-") ?? ""
                h.id = slug || crypto.randomUUID()
            }
        })

        setItems(
            hs.map(h => ({
                id: h.id,
                text: h.textContent ?? "",
                level: h.tagName === "H2" ? 2 : 3,
            }))
        )
    }, [])

    if (items.length < 2) return null

    return (
        <aside className="not-prose rounded-lg border bg-neutral-50 p-4 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            <div className="mb-2 font-medium">On this page</div>
            <nav>
                <ul className="space-y-1">
                    {items.map(it => (
                        <li key={it.id} className={it.level === 3 ? "ml-4" : ""}>
                            <a href={`#${it.id}`} className="hover:underline">{it.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}
