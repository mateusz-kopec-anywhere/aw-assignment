import { notFound } from 'next/navigation';

import { SidebarNavigation } from '~/components/sidebar-navigation';
import { TableOfContents } from '~/components/table-of-contents';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { reader } from '~/keystatic/reader';
import { getHeadingsFromContent } from '~/lib/get-headings-from-content';

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
	const navItemList = posts.filter((p)=> {
		return p.entry.category === post.category
	})
	return (
		<ThreeColumnLayout
			leftSidebar={
				// TODO: Render posts only from category that current post is
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: post.category[0].toUpperCase() + post.category.slice(1,post.category.length),
							},
							navItems: navItemList.map((mappost) => ({
								href: `${mappost.slug}`,
								label: mappost.entry.title,
								highlighted: post.title === mappost.entry.title
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
