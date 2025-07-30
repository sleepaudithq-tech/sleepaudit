export default function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-20">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            SleepAudit.io
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Evidence-based sleep optimization through scientific research,
                            product reviews, and actionable strategies. Improve your sleep
                            quality with trusted, research-backed insights.
                        </p>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                            Categories
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/categories/sleep-science" className="text-gray-600 hover:text-gray-900">
                                    Sleep Science
                                </a>
                            </li>
                            <li>
                                <a href="/categories/product-reviews" className="text-gray-600 hover:text-gray-900">
                                    Product Reviews
                                </a>
                            </li>
                            <li>
                                <a href="/categories/sleep-tips" className="text-gray-600 hover:text-gray-900">
                                    Better Sleep Habits
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="/privacy" className="text-gray-600 hover:text-gray-900">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms" className="text-gray-600 hover:text-gray-900">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="/disclaimer" className="text-gray-600 hover:text-gray-900">
                                    Medical Disclaimer
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-gray-200 mt-8 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} SleepAudit.io. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
} 