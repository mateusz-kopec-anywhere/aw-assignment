import { SidebarNavigation } from '~/components/sidebar-navigation';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';
import { reader } from '~/keystatic/reader';

export default async function PostsListingPage({searchParams}) {
	const posts = await reader.collections.content.all();
	// Get unique categories for nav using Set
	const categoriesSet = new Set(posts.map((post)=>{
		return post.entry.category
	}))
	const navCategories = Array.from(categoriesSet)

	const queryCategory = searchParams?.category?.split(',') || [] ;

	// Filter posts based on selected category
	const activePosts = posts.filter((p)=> {
		if(queryCategory.length === 0)
			return p;
		else 
			return queryCategory.includes(p.entry.category); 
	})

	// Create unique urls with category filters using query parameters
	const getQueryValue = (category: string) => {
		if( queryCategory.includes(category)) {
			const filteredCategories = queryCategory.filter((q) => {
				return q !== category
			})
			return filteredCategories.length > 0 ? '?category='+filteredCategories.join(',') : ''
		} else {
			return '?category='+[...queryCategory,category].join(',')
		}
	}
	return (
		<ThreeColumnLayout
			leftSidebar={
				// TODO: Replace me with categories filters
				<SidebarNavigation
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: 'Categories',
							},
							navItems: navCategories.map((category:string) => ({
								href: `/posts${getQueryValue(category)}`,
								label: category,
								highlighted:queryCategory.includes(category)
							})),
						},
					]}
				/>
			}
		>
			<PostsList
				posts={activePosts.map(({ slug, entry: { title, category } }) => ({
					slug,
					entry: { title, category },
				}))}
			/>
		</ThreeColumnLayout>
	);
}
