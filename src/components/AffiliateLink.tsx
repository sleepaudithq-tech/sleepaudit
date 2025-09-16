"use client"

type Map = Record<string, { url: string; label?: string }>

// TODO: put your real affiliate URLs here once you have them
const LINKS: Map = {
    "breeze-percale": { url: "https://example.com/breeze?affid=YOURID" },
    "coollyocell": { url: "https://example.com/coollyocell?affid=YOURID" },
    "linen-lite": { url: "https://example.com/linen-lite?affid=YOURID" },
    "bamboo-balance": { url: "https://example.com/bamboo-balance?affid=YOURID" },
    "organic-percale-classic": { url: "https://example.com/organic-percale?affid=YOURID" },
}

export default function AffiliateLink({
    id,
    text,
    className = "inline-flex items-center rounded-md bg-black px-3 py-1.5 text-white text-sm font-medium hover:opacity-90",
}: {
    id: keyof typeof LINKS
    text?: string
    className?: string
}) {
    const item = LINKS[id]
    if (!item) return null
    const label = text || item.label || "Shop now"
    return (
        <a
            href={item.url}
            target="_blank"
            rel="nofollow sponsored noopener"
            className={className}
        >
            {label}
        </a>
    )
}
