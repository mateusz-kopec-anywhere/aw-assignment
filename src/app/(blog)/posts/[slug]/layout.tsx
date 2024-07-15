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
	const categoryOnlyPosts = posts.filter(item => item.entry.category == post.category);

	const headings = getHeadingsFromContent(await post.content());

	return (
		<ThreeColumnLayout
			leftSidebar={
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: post.category,
							},
							navItems: categoryOnlyPosts.map((post) => ({
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
