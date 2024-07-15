'use client';

import { notFound, usePathname } from 'next/navigation';

import { packs } from '~/lib/packs';
import { cn, isNonEmptyArray } from '~/lib/utils';

export type CategoriesFilterProps = {
	navGroups: Array<{
		heading: { id: string; label: string };
		navItems: Array<{ slug: string; label: string }>;
	}>;
	filteredList: Array<string>;
	onChange: (filter: string) => void;
};

export function CategoriesFilter({ navGroups, filteredList = [], onChange }: CategoriesFilterProps) {

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
				{navGroups.map(({ heading, navItems }) => (
					<div key={heading.id}>
						<h2
							className="text-lg mb-4 text-gray-900 font-strong dark:text-white"
							id={heading.id}
						>
							{heading.label}
						</h2>
						<ul
							aria-labelledby={heading.id}
							className="flex flex-col gap-2"
							role="list"
						>
							{navItems.map(({ slug, label }) => {
								return (
									<li key={slug}>
										<label
											className="text-md font-semibold select-none cursor-pointer text-gray-600"
											htmlFor={slug}
										>
											<input
												type="checkbox"
												checked={filteredList.includes(slug)}
												onClick={()=>onChange(slug)}
												id={slug}
											/>
											<span className="ml-2.5">{label.toUpperCase()}</span>
										</label>
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
