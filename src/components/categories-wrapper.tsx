'use server';
import { CategoriesList } from './categories-list';

interface Content {
	level: number;
	type: string;
	children: Array<Object>;
}

interface Post {
	category: string;
	title: string;
	authors?: Array<string>;
	content?: Array<Content>;
}

export interface Posts {
	entry: Post;
	slug: string;
}

export interface Categories {
	entry: {
		category: string
	};
	slug: string;
}

export type CategoriesWrapperProps = {
	posts: Array<Posts>;
	categories: Array<Categories>;
};

export async function CategoriesWrapper({ posts, categories }: CategoriesWrapperProps) {
	let filteredPosts = [];
	posts.forEach((post)=> {
		filteredPosts.push({
			slug: post.slug,
			entry: {
				title: post.entry.title,
				category: post.entry.category
			}
		})
	});
	return <CategoriesList posts={filteredPosts} categories={categories} />;
};
