import { reader } from '~/keystatic/reader';
import { CategoriesWrapper } from '~/components/categories-wrapper';

export default async function PostsListingPage() {
	const posts = await reader.collections.content.all();
	const categories = await reader.collections.categories.all();

	return <CategoriesWrapper posts={posts} categories={categories} />;
}
