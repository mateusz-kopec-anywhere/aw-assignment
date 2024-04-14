import { Main } from '~/components/main';
import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

type LayoutType = 'MAIN_ONLY' | 'LEFT_SIDEBAR' | 'RIGHT_SIDEBAR' | 'BOTH';

export function ThreeColumnLayout({
	children,
	leftSidebar,
	rightSidebar,
}: {
	children: React.ReactNode;
	leftSidebar?: React.ReactNode;
	rightSidebar?: React.ReactNode;
}) {
	const layoutType: LayoutType = leftSidebar
		? rightSidebar
			? 'BOTH'
			: 'LEFT_SIDEBAR'
		: rightSidebar
		? 'RIGHT_SIDEBAR'
		: 'MAIN_ONLY';

	return (
		<div
			className={cn(
				'grid',
				layoutType === 'MAIN_ONLY' && 'md:grid-cols-1',
				layoutType === 'LEFT_SIDEBAR' && 'lg:grid-cols-[16rem,minmax(0,1fr)]',
				layoutType === 'RIGHT_SIDEBAR' && 'md:grid-cols-[minmax(0,1fr),16rem]',
				layoutType === 'BOTH' &&
					'md:grid-cols-[minmax(0,1fr),16rem] lg:grid-cols-[16rem,minmax(0,1fr),16rem]',
				packs.container
			)}
		>
			{leftSidebar ? leftSidebar : null}
			<Main className={cn(packs.innerPadding, packs.container, 'pb-20 pt-10')}>
				{children}
			</Main>
			{rightSidebar ? rightSidebar : null}
		</div>
	);
}
