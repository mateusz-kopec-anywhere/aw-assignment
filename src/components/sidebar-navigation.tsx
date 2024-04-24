'use client'
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { notFound, usePathname } from 'next/navigation';

import { packs } from '~/lib/packs';
import { cn, isNonEmptyArray } from '~/lib/utils';
import { SidebarNavigationType } from '~/types/app';

export function SidebarNavigation({ navGroups }: SidebarNavigationType) {
	const pathname = usePathname();

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
							className="text-lg bg-gray-700 py-1 rounded text-white text-center my-3 font-strong dark:text-white capitalize"
							id={heading.id}
						>
							{heading.label}
						</h2>
						<ul
							aria-labelledby={heading.id}
							className="flex flex-col gap-2"
							role="list"
						>
							{navItems.map(({ href, label }) => {
								const isHighlighted = pathname === href;
								return (
									<li key={label}>

										<NextLink
											className={cn(
												'relative block overflow-hidden rounded-xl px-4 py-2 text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800',
												packs.focusVisible
											)}
											href={href}
										>
											{
												isHighlighted ? (
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
												) : <></>
											}
											{label}
										</NextLink>
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
