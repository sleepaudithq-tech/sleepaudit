import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-gray-900">
                        SleepAudit.io
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/blog"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Blog
                        </Link>
                        <Link
                            href="/categories"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Categories
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            About
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-600 hover:text-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
} 