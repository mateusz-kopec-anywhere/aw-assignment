'use client';

import { useLayoutEffect, useState } from 'react';

import { useColorScheme } from '~/lib/use-color-scheme';
import { usePreviousValue } from '~/lib/use-previous-value';

type BrandProviderProps = {
	children: React.ReactNode;
	className?: string;
};

export function BrandProvider({
	children,
	className,
	...consumerProps
}: BrandProviderProps) {
	const colorScheme = useColorScheme();
	const prevColorScheme = usePreviousValue(colorScheme);
	const [showBrand, setShowBrand] = useState(prevColorScheme !== undefined);

	useLayoutEffect(() => {
		if (prevColorScheme !== colorScheme) {
			setShowBrand(true);
		}
	}, [prevColorScheme, colorScheme]);

	if (!colorScheme || !showBrand) return null;

	return <div className={className}>{children}</div>;
}
