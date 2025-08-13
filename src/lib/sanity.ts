export { client } from '@/sanity/lib/client'

// Placeholder data for testing before Sanity is connected
export const getPlaceholderData = () => {
    const placeholderCategories = [
        {
            _id: 'placeholder-cat-1',
            title: 'Sleep Science',
            slug: { current: 'sleep-science' },
            description: 'Research-backed insights into sleep physiology and optimization',
            color: 'blue',
            featured: true,
            sortOrder: 0
        },
        {
            _id: 'placeholder-cat-2',
            title: 'Health Tips',
            slug: { current: 'health-tips' },
            description: 'Practical strategies for better health and wellness',
            color: 'green',
            featured: false,
            sortOrder: 1
        }
    ]

    const placeholderPosts = [
        {
            _id: 'placeholder-post-1',
            title: 'The Science of Sleep: Why 8 Hours Matter',
            slug: { current: 'science-of-sleep-8-hours-matter' },
            metaDescription: 'Discover the research behind why getting 8 hours of quality sleep is crucial for your health, performance, and longevity.',
            excerpt: 'Discover the research behind why getting 8 hours of quality sleep is crucial for your health, performance, and longevity.',
            publishedAt: '2024-08-10T10:00:00Z',
            estimatedReadingTime: 5,
            category: {
                title: 'Sleep Science',
                slug: { current: 'sleep-science' },
                color: 'blue'
            },
            tags: ['sleep', 'science', 'health'],
            featuredImage: {
                asset: { url: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop' },
                alt: 'Person sleeping peacefully'
            },
            body: [
                {
                    _type: 'block',
                    children: [
                        {
                            _type: 'span',
                            text: 'Getting adequate sleep is one of the most important things you can do for your health. Research shows that consistently getting 7-9 hours of quality sleep per night is associated with better cognitive function, improved mood, stronger immune system, and reduced risk of chronic diseases.'
                        }
                    ],
                    markDefs: [],
                    style: 'normal'
                }
            ],
            sources: [
                {
                    title: 'Sleep and Health: A Meta-Analysis',
                    url: 'https://example.com/sleep-research',
                    authors: 'Sleep Research Institute'
                }
            ],
            status: 'published'
        },
        {
            _id: 'placeholder-post-2',
            title: '5 Morning Habits That Transform Your Day',
            slug: { current: '5-morning-habits-transform-day' },
            metaDescription: 'Learn the morning routines that successful people use to boost energy, focus, and productivity throughout the day.',
            excerpt: 'Learn the morning routines that successful people use to boost energy, focus, and productivity throughout the day.',
            publishedAt: '2024-08-09T09:00:00Z',
            estimatedReadingTime: 4,
            category: {
                title: 'Health Tips',
                slug: { current: 'health-tips' },
                color: 'green'
            },
            tags: ['morning', 'habits', 'productivity'],
            featuredImage: {
                asset: { url: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=600&fit=crop' },
                alt: 'Sunrise over mountains'
            },
            body: [
                {
                    _type: 'block',
                    children: [
                        {
                            _type: 'span',
                            text: 'Your morning routine sets the tone for your entire day. By implementing these five key habits, you can dramatically improve your energy levels, focus, and overall productivity.'
                        }
                    ],
                    markDefs: [],
                    style: 'normal'
                }
            ],
            sources: [
                {
                    title: 'Morning Routines of Successful People',
                    url: 'https://example.com/morning-routines',
                    authors: 'Productivity Research Center'
                }
            ],
            status: 'published'
        }
    ]

    return { placeholderCategories, placeholderPosts }
}
