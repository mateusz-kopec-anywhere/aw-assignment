'use client';

import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SidebarNavigation } from '~/components/sidebar-navigation';
import { TableOfContents } from '~/components/table-of-contents';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { reader } from '~/keystatic/reader';
import { getHeadingsFromContent } from '~/lib/get-headings-from-content';

interface Content {
	level: number;
	type: string;
	children: Array<Object>;
}

interface Post {
	category: string;
	title: string;
	authors: Array<string>;
	headings: Array<Content>;
}

interface Posts {
	entry: Post;
	slug: string;
}

export default function PostLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	const [posts, setPosts] = useState<Posts[]>([]);
	const [post, setPost] = useState<Post>();
	const [selectedposts, setSelectedPosts] = useState<Posts[]>([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/posts')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPosts(data);
			});
	}, []);

	useEffect(() => {
		fetch('http://localhost:3000/api/post', {
			method: 'POST',
			body: JSON.stringify({
				params: params,
			}),
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPost(data);
				if (!data) notFound();
			});
	}, []);

	useEffect(() => {
		if (post?.category && posts.length) {
			let filteredList = posts.filter(
				(item) => post.category === item.entry.category
			);
			setSelectedPosts(filteredList);
		}
		console.log('==>', post);
	}, [post?.category, posts]);

	const headings = getHeadingsFromContent(post?.headings);

	return (
		<ThreeColumnLayout
			leftSidebar={
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: post?.category.toUpperCase(),
							},
							navItems: selectedposts.map((post) => ({
								href: `/posts/${post.slug}`,
								label: post.entry.title,
							})),
						},
					]}
				/>
			}
			rightSidebar={
				post?.headings?.length > 0 ? (
					<TableOfContents headings={headings} />
				) : null
			}
		>
			{children}
		</ThreeColumnLayout>
	);
}
