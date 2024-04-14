'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import NextLink from 'next/link';
import { useCallback } from 'react';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export function Dot(props: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span
			{...props}
			aria-hidden="true"
			className={cn(
				'font-display font-bold text-docs-primary',
				props.className
			)}
		>
			.
		</span>
	);
}

export function HeroCard({
	heading,
	href,
	illustration,
	lead,
	linkText,
}: {
	heading: string;
	href: string;
	illustration: JSX.Element;
	lead: string;
	linkText: string;
}) {
	const { mouseX, mouseY, handleMouseMove } = useMouseMove();

	return (
		<li
			className={cn(
				'group relative mx-auto flex w-full max-w-lg flex-col gap-2 overflow-hidden rounded-xl text-left backdrop-blur-[6px] transition duration-150',
				'bg-[#edeeef] xl:bg-[#aeb4b738]',
				'dark:bg-[#2e344080] dark:xl:bg-[#2e344080]',
				'hover:-translate-y-1 hover:shadow-lg hover:duration-300'
			)}
			key={href}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
					radial-gradient(
						400px circle at ${mouseX}px ${mouseY}px,
						rgba(255, 255, 255, 0.1),
						transparent
					)
				`,
				}}
			/>
			<div className="relative p-6">
				<h2 className="font-display text-2xl font-bold text-foreground xl:text-white">
					{heading}
					<Dot />
				</h2>
				<p className="text-muted-foreground xl:text-gray-400">{lead}</p>
				<div className="mt-auto flex flex-col items-start gap-4">
					<NextLink
						className={cn(
							'font-regular before:absolute before:inset-0 xl:text-background dark:xl:text-foreground',
							packs.focusVisible
						)}
						href={href}
					>
						{linkText}
					</NextLink>
					{illustration}
				</div>
			</div>
		</li>
	);
}

export function ResourceCard({
	heading,
	href,
	illustration,
	lead,
	linkText,
}: {
	heading: string;
	href: string;
	illustration: JSX.Element;
	lead: string;
	linkText: string;
}) {
	const { mouseX, mouseY, handleMouseMove } = useMouseMove();

	return (
		<li
			className={cn(
				'group relative flex flex-col gap-6 rounded-2xl border border-gray-100 p-8 shadow-xl transition duration-150 dark:border-transparent dark:bg-[#161b26]',
				'hover:-translate-y-1 hover:shadow-2xl hover:duration-300'
			)}
			onMouseMove={handleMouseMove}
		>
			<motion.div
				aria-hidden="true"
				className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
				style={{
					background: useMotionTemplate`
					radial-gradient(
						400px circle at ${mouseX}px ${mouseY}px,
						rgba(255, 255, 255, 0.1),
						transparent
					)
				`,
				}}
			/>
			{illustration}
			<div className="flex flex-1 flex-col gap-2">
				<h3 className="font-display text-2xl font-bold">
					{heading}
					<Dot />
				</h3>
				<p className="text-[#586874] dark:text-[#bfc8cf]">{lead}</p>
				<div className="mt-auto">
					<NextLink
						className={cn(
							'text-docs-primary font-regular before:absolute before:inset-0',
							packs.focusVisible
						)}
						href={href}
					>
						{linkText}
					</NextLink>
				</div>
			</div>
		</li>
	);
}

function useMouseMove() {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const handleMouseMove = useCallback(
		function handleMouseMove(event: React.MouseEvent) {
			const { left, top } = event.currentTarget.getBoundingClientRect();
			mouseX.set(event.clientX - left);
			mouseY.set(event.clientY - top);
		},
		[mouseX, mouseY]
	);

	return { mouseX, mouseY, handleMouseMove };
}
