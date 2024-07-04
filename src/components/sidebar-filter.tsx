'use client';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export type SidebarFilterProps = {
	heading: string;
	availableCategories: Array<string>;
	filteredCategories: Array<string>;
	onCategoryClick: (category: string) => void;
};

export function SidebarFilter({
	heading,
	availableCategories,
	filteredCategories,
	onCategoryClick,
}: SidebarFilterProps) {
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
				<div>
					<h2 className="font-strong text-lg text-gray-900 dark:text-white">
						{heading}
					</h2>
					<ul className="mt-2 flex flex-col gap-2" role="list">
						{availableCategories.map((item) => {
							return (
								<li key={item}>
									<input
										type="checkbox"
										checked={filteredCategories.includes(item)}
										id={item}
										onClick={() => onCategoryClick(item)}
									/>
									<label
										className="ml-2.5 text-lg font-semibold"
										htmlFor={item}
									>
										{item.toUpperCase()}
									</label>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
}
