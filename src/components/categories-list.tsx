'use client';

import { notFound, usePathname } from 'next/navigation';

import { packs } from '~/lib/packs';
import { cn, isNonEmptyArray } from '~/lib/utils';
import { CategoriesFilter } from './categories-filter';
import { ThreeColumnLayout } from './three-column-layout';
import { PostsList } from './posts-list';
import { useEffect, useState } from 'react';
import { Posts, Categories } from './categories-wrapper';

export type CategoriesListProps = {
	posts: Array<Posts>;
	categories: Array<Categories>;
};

export function CategoriesList({ posts, categories }: CategoriesListProps) {
	const [filteredCategories, setFilteredCategories] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState(posts);

	const onFilterChange = (slug) => {
		if (filteredCategories.includes(slug)) {
			const newFilteredList = filteredCategories.filter(value => value != slug);
			setFilteredCategories(newFilteredList);
		} else {
			setFilteredCategories([...new Set([...filteredCategories, slug])]);
		}
	};

	useEffect(()=> {
		if (filteredCategories.length > 0) {
			console.log(posts);
			const newFilteredPosts = posts.filter(post => filteredCategories.includes(post.entry.category));
			setFilteredPosts(newFilteredPosts);
		} else {
			setFilteredPosts(posts);
		}
	}, [filteredCategories]);

	return (
		<ThreeColumnLayout
			leftSidebar={
				<CategoriesFilter
					navGroups={[
						{
							heading: {
								id: 'posts-heading',
								label: 'Categories',
							},
							navItems: categories.map((category) => ({
								slug: category.slug,
								label: category.entry.category,
							})),
						},
					]}
					filteredList={filteredCategories}
					onChange={onFilterChange}
				/>
			}
		>
			<PostsList
				posts={filteredPosts.map(({ slug, entry: { title, category } }) => ({
					slug,
					entry: { title, category },
				}))}
			/>
		</ThreeColumnLayout>
	);
}
