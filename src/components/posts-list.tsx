'use client';
import NextLink from 'next/link';
import { useContext } from 'react';
import { PostsContext } from './context/posts-context';

export function PostsList() {
	const { filteredPosts } = useContext(PostsContext);

	return (
		<div className="prose dark:prose-invert">
			<ul className="list-none p-0">
				{filteredPosts.map((post) => {
					const href = `/posts/${post.slug}`;

					return (
						<li key={post.slug}>
							<NextLink
								className="relative block overflow-hidden rounded-xl px-4 py-2 text-gray-600 no-underline hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
								href={href}
							>
								<p className="m-0 text-lg font-semibold">{post.entry.title}</p>
								<button className='py-0.5 px-2  bg-gray-700 rounded text-white'>
									{post.entry.category}
								</button>
							</NextLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
