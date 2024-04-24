import LayoutWrapper from '~/components/client-component';
import { reader } from '~/keystatic/reader';
export default async function PostsListingPage() {
	const postsData = await reader.collections.content.all();
	// To get rid of contnet from the postsData
	const postDataExceptContent = postsData.map((post) => {
		return {
			slug: post.slug,
			entry: {
				title: post.entry.title,
				authors: post.entry.authors,
				category: post.entry.category,
			},
		};
	})
	const categoriesData = await reader.collections.categories.all();
	return (
		<LayoutWrapper postsData={postDataExceptContent} categoriesData={categoriesData} />

	);
}
