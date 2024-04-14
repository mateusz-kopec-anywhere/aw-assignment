'use client';

import {
	Content,
	Item,
	Portal,
	Root,
	Trigger,
} from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { cn } from '~/lib/utils';

export const DropdownMenu = Root;

export const DropdownMenuTrigger = Trigger;

export const DropdownMenuContent = forwardRef<
	React.ElementRef<typeof Content>,
	React.ComponentPropsWithoutRef<typeof Content>
>(function DropdownMenuContent(
	{ className, sideOffset = 4, ...consumerProps },
	forwardedRef
) {
	return (
		<Portal>
			<Content
				{...consumerProps}
				className={cn(
					`
					z-50
					min-w-[8rem]
					overflow-hidden
					rounded-md
					border
					bg-popover
					p-1
					text-popover-foreground
					shadow-md
					data-[state=open]:animate-in
					data-[state=closed]:animate-out
					data-[state=closed]:fade-out-0
					data-[state=open]:fade-in-0
					data-[state=closed]:zoom-out-95
					data-[state=open]:zoom-in-95
					data-[side=bottom]:slide-in-from-top-2
					data-[side=left]:slide-in-from-right-2
					data-[side=right]:slide-in-from-left-2
					data-[side=top]:slide-in-from-bottom-2
				`,
					className
				)}
				ref={forwardedRef}
				sideOffset={sideOffset}
			/>
		</Portal>
	);
});

export const DropdownMenuItem = forwardRef<
	React.ElementRef<typeof Item>,
	React.ComponentPropsWithoutRef<typeof Item> & {
		inset?: boolean;
	}
>(function DropdownMenuItem(
	{ className, inset, ...consumerProps },
	forwardedRef
) {
	return (
		<Item
			{...consumerProps}
			className={cn(
				`
				relative
				flex
				cursor-default
				select-none
				items-center
				rounded-sm
				px-2
				py-1.5
				text-sm
				outline-none
				transition-colors
				focus:bg-accent
				focus:text-onPrimary
				data-[disabled]:pointer-events-none
				data-[disabled]:opacity-50
			`,
				inset && 'ps-8',
				className
			)}
			ref={forwardedRef}
		/>
	);
});
