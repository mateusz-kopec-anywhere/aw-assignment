'use client';

import { capitalise } from '~/lib/utils';

export default function CategoryFilter({
	categories = [],
	selectedCategories = [],
	onSelectCategory = (_c) => {},
}: {
	categories: string[];
	selectedCategories: string[];
	onSelectCategory: (category: string) => void;
}) {
	const getSelectedCategoryColor = (category) =>
		selectedCategories.includes(category) ? `bg-gray-200 dark:bg-gray-800` : '';

	return (
		<div className="prose dark:prose-invert">
			<h2 className="text-lg font-semibold">Categories</h2>
			<ul className="list-none p-0">
				{categories.map((category) => (
					<li key={category}>
						<button
							className={`relative block overflow-hidden rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 ${getSelectedCategoryColor(
								category
							)}`}
							onClick={() => onSelectCategory(category)}
						>
							{capitalise(category)}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
