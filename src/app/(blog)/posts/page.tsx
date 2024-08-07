import { MultiSelectTab } from '~/components/multiselect-tab';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';

import { reader } from '~/keystatic/reader';

export default async function PostsListingPage() {
	const categories = await reader.collections.categories.all();
	const postList = await reader.collections.content.all();

	return (
		<ThreeColumnLayout
			leftSidebar={
				<MultiSelectTab
					tabItems={categories.map((category, index) => ({
            id: index,
            label: category.entry.category,
          }))}
				/>
			}
		>
			<PostsList
				posts={postList.map(({ slug, entry: { title, category } }) => ({
					slug,
					entry: { title, category },
				}))}
			/>
		</ThreeColumnLayout>
	);
}
