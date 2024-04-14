'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export function PostsList({
	posts,
}: {
	posts: {
		slug: string;
		entry: {
			title: string;
			category: string;
		};
	}[];
}) {
	const pathname = usePathname();

	return (
		<div className="prose dark:prose-invert">
			<ul className="list-none p-0">
				{posts.map((post) => {
					const href = `/posts/${post.slug}`;

					return (
						<li key={href}>
							<NextLink
								className="relative block overflow-hidden rounded-xl px-4 py-2 text-gray-600 no-underline hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
								href={href}
							>
								<p className="m-0 text-lg font-semibold">{post.entry.title}</p>
								<p className="m-0 text-sm text-gray-400">
									{post.entry.category}
								</p>
							</NextLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
