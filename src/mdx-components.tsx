import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        ...components,

        // Headings & text polish
        h1: (props) => <h1 className="mt-0 text-3xl md:text-4xl font-semibold tracking-tight" {...props} />,
        h2: (props) => <h2 className="mt-10 text-2xl md:text-3xl font-semibold tracking-tight" {...props} />,
        h3: (props) => <h3 className="mt-8 text-xl font-semibold" {...props} />,
        p: (props) => <p className="leading-7" {...props} />,
        a: (props) => <a className="underline decoration-neutral-400 hover:decoration-neutral-700" {...props} />,
        img: (props) => <img className="rounded-xl my-6" {...props} />,

        // Lists
        ul: (props) => <ul className="list-disc pl-6 space-y-1" {...props} />,
        ol: (props) => <ol className="list-decimal pl-6 space-y-1" {...props} />,

        // Tables (render as real, bordered tables)
        table: (props) => (
            <table className="w-full text-sm my-6 border border-neutral-200 rounded-lg overflow-hidden" {...props} />
        ),
        thead: (props) => <thead className="bg-neutral-50 text-neutral-700" {...props} />,
        th: (props) => <th className="px-3 py-2 text-left font-medium border-b border-neutral-200" {...props} />,
        td: (props) => <td className="px-3 py-2 border-b border-neutral-200 align-top" {...props} />,
    }
}
