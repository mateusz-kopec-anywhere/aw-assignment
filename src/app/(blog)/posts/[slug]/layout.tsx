import { notFound } from 'next/navigation';

import { SidebarNavigation } from '~/components/sidebar-navigation';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { reader } from '~/keystatic/reader';

export default async function PostLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	const posts = await reader.collections.content.all();
	const post = await reader.collections.content.read(params.slug);
	// To identify the category of the post, we filter the posts by the category of the post
	const category = post?.category;
	// Sidebar should have the posts filtered by the category of the post
	const filteredPostsByCategory = posts.filter((post) => post.entry.category === category);

	if (!post) notFound();

	return (
		<ThreeColumnLayout
			leftSidebar={
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: category,
							},
							navItems: filteredPostsByCategory.map((post) => ({
								href: `/posts/${post.slug}`,
								label: post.entry.title,
							})),
						},
					]}
				/>
			}
		>
			{children}
		</ThreeColumnLayout>
	);
}
