import { reader } from '~/keystatic/reader';
import Posts from '~/components/posts';
export default async function PostsListingPage() {
	const posts = await reader.collections.content.all();

	// passing unique set of categories to Posts component
	const categories = [...new Set(posts.map((post) => post.entry.category))];

	return (
		<Posts
			categories={categories}
			posts={posts.map(({ slug, entry: { title, category } }) => ({
				slug,
				entry: { title, category },
			}))}
		/>
	);
}
