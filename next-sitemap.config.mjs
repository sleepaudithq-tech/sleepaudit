const siteUrl = process.env.SITE_URL || "https://sleepaudit.io"

export default {
  siteUrl,
  generateRobotsTxt: true,
  // Keep it simple and fast
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [
    "/api/*",
    "/drafts/*",
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/drafts/"] },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
    ],
  },
  // Make homepage highest priority
  transform: async (config, path) => ({
    loc: path,
    changefreq: "weekly",
    priority: path === "/" ? 1.0 : 0.7,
    lastmod: new Date().toISOString(),
  }),
}
