import { SidebarNavigation } from '~/components/sidebar-navigation';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';
import { reader } from '~/keystatic/reader';

export default async function PostsListingPage() {
	const posts = await reader.collections.content.all();

	return (
		<ThreeColumnLayout
			leftSidebar={
				// TODO: Replace me with categories filters
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: 'Posts',
							},
							navItems: posts.map((post) => ({
								href: `/content/${post.slug}`,
								label: post.entry.title,
							})),
						},
					]}
				/>
			}
		>
			<PostsList
				posts={posts.map(({ slug, entry: { title, category } }) => ({
					slug,
					entry: { title, category },
				}))}
			/>
		</ThreeColumnLayout>
	);
}
