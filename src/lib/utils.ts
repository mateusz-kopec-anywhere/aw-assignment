import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Checks whether or not an array is empty. */
export function isNonEmptyArray<T>(value: readonly T[]): value is [T, ...T[]] {
	return value.length > 0;
}

/** Filter out non-truthy values from an array. */
export function filterTruthy<T>(maybeItem: T): maybeItem is NonNullable<T> {
	return Boolean(maybeItem);
}

export async function sleep(ms: number) {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

export async function minDelay<T>(promise: Promise<T>, ms: number) {
	const [p] = await Promise.all([promise, sleep(ms)]);

	return p;
}

export function capitalise(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}