'use client';

import { CheckIcon, ChevronDownIcon } from '@adaptavant/eds-core/icons';
import {
	Content,
	Item,
	ItemIndicator,
	ItemText,
	Portal,
	Root,
	Trigger,
	Value,
	Viewport,
} from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

export const Select = Root;

export const SelectValue = Value;

export const SelectTrigger = forwardRef<
	React.ElementRef<typeof Trigger>,
	React.ComponentPropsWithoutRef<typeof Trigger>
>(function SelectTrigger(
	{ className, children, ...consumerProps },
	forwardedRef
) {
	return (
		<Trigger
			{...consumerProps}
			className={cn(
				'flex h-10 w-full items-center justify-between rounded-md border border-docs-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
				packs.focusVisible,
				className
			)}
			ref={forwardedRef}
		>
			{children}
			<ChevronDownIcon className="h-4 w-4 opacity-50" />
		</Trigger>
	);
});

export const SelectContent = forwardRef<
	React.ElementRef<typeof Content>,
	React.ComponentPropsWithoutRef<typeof Content>
>(function SelectContent(
	{ className, children, position = 'popper', ...consumerProps },
	forwardedRef
) {
	return (
		<Portal>
			<Content
				{...consumerProps}
				className={cn(
					'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md',
					'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
					'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
					'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					position === 'popper' &&
						'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
					className
				)}
				position={position}
				ref={forwardedRef}
			>
				<Viewport
					className={cn(
						'p-1',
						position === 'popper' &&
							'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
					)}
				>
					{children}
				</Viewport>
			</Content>
		</Portal>
	);
});

export const SelectItem = forwardRef<
	React.ElementRef<typeof Item>,
	React.ComponentPropsWithoutRef<typeof Item>
>(function SelectItem({ className, children, ...consumerProps }, forwardedRef) {
	return (
		<Item
			{...consumerProps}
			className={cn(
				'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pe-2 ps-8 text-sm outline-none focus:bg-accent focus:text-onPrimary data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className
			)}
			ref={forwardedRef}
		>
			<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
				<ItemIndicator>
					<CheckIcon className="h-4 w-4" />
				</ItemIndicator>
			</span>

			<ItemText>{children}</ItemText>
		</Item>
	);
});
