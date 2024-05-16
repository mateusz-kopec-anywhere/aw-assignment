import { notFound } from 'next/navigation';

import { SidebarNavigation } from '~/components/sidebar-navigation';
import { TableOfContents } from '~/components/table-of-contents';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { reader } from '~/keystatic/reader';
import { getHeadingsFromContent } from '~/lib/get-headings-from-content';
import { capitalise } from '~/lib/utils';

export default async function PostLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { slug: string };
}) {
	const posts = await reader.collections.content.all();
	const post = await reader.collections.content.read(params.slug);

	if (!post) notFound();

	const headings = getHeadingsFromContent(await post.content());

	return (
		<ThreeColumnLayout
			leftSidebar={
				// TODO: Render posts only from category that current post is
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: capitalise(post.category),
							},
							navItems: posts
								.filter((p) => p.entry.category === post.category)
								.map((post) => ({
									href: `/posts/${post.slug}`,
									label: post.entry.title,
								})),
						},
					]}
				/>
			}
			rightSidebar={
				headings.length > 0 ? <TableOfContents headings={headings} /> : null
			}
		>
			{children}
		</ThreeColumnLayout>
	);
}
