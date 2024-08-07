import { notFound } from 'next/navigation';
import { headers } from "next/headers";

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

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const selectedCategory = headerList.get("x-current-category");

	const posts = await reader.collections.content.all();
	const post = await reader.collections.content.read(params.slug);

  const currentPost = pathname?.split('/')?.pop();

	if (!post) notFound();

	const headings = getHeadingsFromContent(await post.content());

	return (
		<ThreeColumnLayout
			leftSidebar={
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: 'Posts',
							},
							navItems: posts
                .filter((post) => (post.entry.category === selectedCategory) && (post.slug !== currentPost))
                .map((post) => ({
                  href: `/posts/${post.slug}/?category=${selectedCategory}`,
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
