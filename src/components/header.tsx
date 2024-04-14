'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import { LogoLink } from '~/components/logo-link';
import { ThemeSwitcher } from '~/components/theme-switcher';
import { HEADER_ID, MAIN_ID } from '~/lib/constants';
import { MainNav } from '~/lib/get-main-nav';
import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export function Header({
	mainNav
}: {
	mainNav: MainNav
}) {
	const pathname = usePathname();

	return (
		<header
			className="sticky top-0 z-10 bg-white/75 font-copy backdrop-blur dark:bg-black/50"
			id={HEADER_ID}
			role="banner"
		>
			<div
				className={cn(
					packs.innerPadding,
					packs.container,
					'flex flex-wrap items-center gap-4'
				)}
			>
				<a
					className={cn(
						'sr-only',
						'focus-visible:not-sr-only focus-visible:absolute focus-visible:inline-block focus-visible:rounded-full focus-visible:bg-gray-200 focus-visible:px-3 focus-visible:py-1.5 focus-visible:hover:text-gray-600',
						'dark:focus-visible:bg-teal-700 dark:focus-visible:hover:text-white',
						packs.focusVisible
					)}
					href={`#${MAIN_ID}`}
				>
					Skip to main content
				</a>
				<div className="flex flex-1 items-center">
					<LogoLink />
				</div>
				<nav
					aria-label="Primary"
					className="hidden h-[var(--header-height)] justify-center lg:flex"
					role="navigation"
				>
					<ul className="flex h-full"> 
						{mainNav.map(({ href, label }) => {
							const isCurrent = pathname === href;
							const isHighlighted =
								href === '/' ? pathname === href : pathname?.includes(href);
							return (
								<li className="flex h-full" key={href}>
									<NextLink
										aria-current={isCurrent ? 'page' : undefined}
										className={cn(
											'relative flex h-full items-center px-3 py-1.5 text-sm transition font-regular hover:bg-muted dark:hover:bg-muted/50',
											'text-gray-800',
											'dark:text-gray-200',
											'text-sm sm:px-4 sm:py-1.5',
											isHighlighted && 'text-docs-primary',
											packs.focusVisible
										)}
										href={href}
									>
										{isHighlighted ? (
											<span
												aria-hidden="true"
												className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-docs-primary"
											/>
										) : null}
										<span className="relative z-10">{label}</span>
									</NextLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="flex flex-1 items-center justify-end gap-4">
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}
