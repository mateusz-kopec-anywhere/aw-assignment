'use client';

import { usePathname } from 'next/navigation';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export type SidebarCategoriesProps = {
	
		heading: { id: string; label: string };
		catItems: string[];
		setSelectedCategories: (cat: string) => void;
		selectedCategories: string[];
};

export function SidebarCategories({ heading, catItems, setSelectedCategories, selectedCategories }: SidebarCategoriesProps) {
	const pathname = usePathname();

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
					<div key={heading.id}>
						<h2
							className="text-lg text-gray-900 font-strong dark:text-white"
							id={heading.id}
						>
							{heading.label}
						</h2>
						<ul
							aria-labelledby={heading.id}
							className="flex flex-col gap-2"
							role="list"
						>
							{catItems.map((item) => {
								return (
									<li key={item}>
										<input className='ml-2.5' type='checkbox' checked={selectedCategories.includes(item)} id={item} onClick={() => setSelectedCategories(item)}/>
										<label className='ml-2.5 text-md' htmlFor={item}>{item[0].toUpperCase() + item.split("").slice(1, item.length).join("")}</label>
									</li>
								);
							})}
						</ul>
					</div>

			</div>
		</nav>
	);
}
