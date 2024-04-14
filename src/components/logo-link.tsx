import NextLink from 'next/link';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';
import { AnywhereWorksLogo } from "./vectors/anywhere-works-logo";

export function LogoLink() {
	return (
		<NextLink
			className={cn(
				'-ms-4 inline-flex h-full items-center gap-2 whitespace-nowrap p-4 font-display text-lg',
				packs.focusVisible
			)}
			href="/"
		>
			<AnywhereWorksLogo className="h-6 text-foreground" />
		</NextLink>
	);
}
