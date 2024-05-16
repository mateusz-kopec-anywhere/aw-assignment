'use client';
import { useState } from 'react';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';
import CategoryFilter from '~/components/category-filter';

export default function Posts({ categories = [], posts = [] }) {
	const [selectedCategories, setSelectedCategories] = useState([]);

	const handleCategorySelect = (category) => {
		setSelectedCategories((prevSelectedCateg) =>
			prevSelectedCateg.includes(category)
				? prevSelectedCateg.filter((c) => c !== category)
				: [...prevSelectedCateg, category]
		);
	};

	return (
		<ThreeColumnLayout
			leftSidebar={
				<CategoryFilter
					categories={categories}
					selectedCategories={selectedCategories}
					onSelectCategory={handleCategorySelect}
				/>
			}
		>
			<PostsList
				posts={posts?.filter(
					(p) =>
						!selectedCategories.length ||
						selectedCategories?.includes(p.entry.category)
				)}
			/>
		</ThreeColumnLayout>
	);
}
