'use client';

import slugify from '@sindresorhus/slugify';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { HEADER_ID } from '~/lib/constants';
import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

type TableOfContentsProps = {
	headings: Array<{
		level: number;
		label: string;
	}>;
};

export function TableOfContents({ headings }: TableOfContentsProps) {
	const headingsWithSlugs = headings.map(({ level, label }) => {
		const id = slugify(label);
		return {
			href: `#${id}`,
			id,
			label,
			level,
		};
	});

	const ids = headingsWithSlugs.map(({ id }) => {
		return id;
	});

	const { activeId } = useHeadingObserver(ids);

	const tocHeadingId = 'on-this-page';

	return (
		<aside className={cn('hidden md:relative md:flex md:w-64')}>
			<div
				className={cn(
					'hidden',
					'sticky top-[var(--header-height)] h-[calc(100dvh-var(--header-height))] flex-1 overflow-y-auto overflow-x-hidden pb-20 pt-6 md:block',
					packs.innerPadding
				)}
			>
				<nav
					aria-labelledby={tocHeadingId}
					className="-m-1 flex flex-1 flex-col gap-4 overflow-auto p-1 text-base md:text-sm"
				>
					<h2
						className="px-4 text-sm font-semibold uppercase"
						id={tocHeadingId}
					>
						On this page
					</h2>
					<ul className="scroll-smooth" role="list">
						{headingsWithSlugs.map((heading) => (
							<NavItem
								{...heading}
								isActive={activeId === heading.id}
								key={heading.label}
							/>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	);
}

function NavItem({
	href,
	label,
	isActive,
}: {
	href: string;
	label: string;
	isActive: boolean;
}) {
	return (
		<li>
			<a
				className={cn(
					'relative block border-l border-gray-200 px-4 py-2 text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 hover:dark:text-white',
					packs.focusVisible,
					isActive && 'text-blue-600 dark:text-blue-400'
				)}
				href={href}
			>
				{label}
				{isActive ? (
					<motion.span
						className="pointer-events-none absolute inset-y-0 left-0 w-px bg-blue-600 dark:bg-blue-400"
						layoutId="toc-link"
						transition={{
							type: 'spring',
							bounce: 0.2,
							duration: 0.6,
						}}
					/>
				) : null}
			</a>
		</li>
	);
}

function useHeadingObserver(ids: string[]) {
	const observer = useRef<IntersectionObserver>();
	const [activeId, setActiveId] = useState('');
	const [visibleHeadings, setVisibleHeadings] = useState<string[]>([]);

	const headerHeight = useHeaderHeight();

	useEffect(() => {
		const handleObserver = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry?.isIntersecting) {
					// Add entry.target.id to the state array
					setVisibleHeadings((prevState) => [...prevState, entry.target.id]);
				} else {
					// Remove entry.target.id from the state array
					setVisibleHeadings((prevState) =>
						prevState.filter((id) => id !== entry.target.id)
					);
				}
			});
		};

		if (ids.length < 1) return;

		const elements = ids.map((id) => document.getElementById(id));

		observer.current = new IntersectionObserver(handleObserver, {
			rootMargin: `-${headerHeight}px 0px 75% 0px`,
			threshold: 1,
		});

		elements.forEach((element) => {
			if (
				element instanceof Element &&
				observer.current instanceof IntersectionObserver
			) {
				observer.current.observe(element);
			}
		});

		return () => {
			observer.current?.disconnect();
		};
	}, [headerHeight, ids]);

	/**
	 * Rearrange visible headings based on incoming id's order,
	 * and return the first one as the activeId.
	 */
	useEffect(() => {
		const sortedVisibleHeadings = visibleHeadings.sort((a, b) => {
			const aIndex = ids.findIndex((id) => id === `#${a}`);
			const bIndex = ids.findIndex((id) => id === `#${b}`);

			if (aIndex === -1) {
				return bIndex === -1 ? 0 : 1; // Keep b if a not found
			} else if (bIndex === -1) {
				return -1; // Move a before b if b not found
			}

			return aIndex - bIndex; // Sort based on index difference
		});

		if (sortedVisibleHeadings[0]) {
			// Set the first ordered visible heading as the active one
			setActiveId(sortedVisibleHeadings[0]);
		}
	}, [ids, visibleHeadings]);

	return { activeId };
}

function useHeaderHeight() {
	const [height, setHeight] = useState<number>(64);
	const headerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const element = document.getElementById(HEADER_ID)!;
		headerRef.current = element;

		const resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === headerRef.current) {
					setHeight(entry.target.getBoundingClientRect().height);
				}
			}
		});

		if (headerRef.current) {
			resizeObserver.observe(headerRef.current);
			setHeight(headerRef.current.offsetHeight);
		}

		return () => {
			if (headerRef.current) {
				resizeObserver.unobserve(headerRef.current);
			}
		};
	}, []);

	return height;
}
