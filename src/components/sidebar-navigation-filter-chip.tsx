import { motion } from 'framer-motion';
import { notFound, usePathname } from 'next/navigation';

import { packs } from '~/lib/packs';
import { cn, isNonEmptyArray } from '~/lib/utils';
import { PostsContext } from './context/posts-context';
import { useContext } from 'react';

export function SidebarNavigationWithFilterChips() {
	const pathname = usePathname();
	// Avoided Prop drilling through React context
	const { categories, selectedCategory, handleCategorySelection, handleCategoryRemove } = useContext(PostsContext);
	// Nav Groups constructed statically through context values
	const navGroups = [
		{
			heading: {
				id: 'posts-heading',
				label: 'Categories',
			},
			navItems: categories?.map((category, index) => ({
				href: `/content/${category.slug}`,
				label: category.entry.category,
				selectCategory: () => handleCategorySelection(category),
				id: category.entry.category + index
			})),
			selectedCategories: selectedCategory,
			removeCategory: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => handleCategoryRemove(e),
		},
	];

	if (!isNonEmptyArray(navGroups)) return notFound();

	return (
		<nav
			aria-label="Component navigation"
			className="hidden lg:relative lg:flex"
		>
			<div
				className={cn(
					'sticky top-[var(--header-height)] h-[calc(100dvh-var(--header-height))] flex-1 overflow-y-auto overflow-x-hidden',
					'flex flex-col gap-4 pb-20 pt-6 text-base lg:text-sm',
					packs.innerPadding
				)}
			>
				{navGroups.map(({ heading, navItems, selectedCategories, removeCategory }) => (
					<div key={heading.id}>
						<h2
							className="text-lg bg-gray-700 py-1 rounded text-white text-center my-3 font-strong dark:text-white capitalize"
							id={heading.id}
						>
							{heading.label}
						</h2>
						<div className="flex min-h-8 my-3 p-2 flex-row flex-wrap bg-gray-50 border-solid border border-gray-100">
							{
								selectedCategories.map((category) => {
									return (
										<span key={category.slug} className="rounded w-auto bg-gray-700 text-white px-2 py-0.25 text-[9px]" id={category.entry.category} onClick={(e) => removeCategory(e)} style={{ border: '1px solid #ccc', cursor: 'pointer' }} >{category.entry.category} x</span>
									)
								})
							}
						</div>
						<ul
							aria-labelledby={heading.id}
							className="flex flex-col gap-2"
							role="list"
						>
							{navItems.map(({ href, label, selectCategory, id }) => {
								const isHighlighted = pathname === href;
								return (
									<li className='cursor-pointer relative block overflow-hidden rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 ring-offset-background focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-2' key={id} onClick={() => selectCategory()}>
										{isHighlighted ? (
											<span
												aria-hidden="true"
												className="pointer-events-none absolute inset-y-0 left-0 flex items-center"
											>
												<motion.span
													className="h-3 w-0.5 rounded-r-md bg-blue-500"
													layoutId="left-nav-indicator"
													transition={{
														type: 'spring',
														bounce: 0.2,
														duration: 0.6,
													}}
												/>
											</span>
										) : null}
										{label}
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
		</nav>
	);
}
