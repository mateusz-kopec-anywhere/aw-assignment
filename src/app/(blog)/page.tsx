import NextImage from 'next/image';
import NextLink from 'next/link';

import { Main } from '~/components/main';
import { PlantedTreesIllustration } from '~/components/vectors/planted-trees-illustration';
import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

import { Dot, HeroCard, ResourceCard } from './_home-page';
import heroImage from './hero.jpg';
import profilesImage from './profiles.jpg';

export default function Homepage() {
	return (
		<Main className="flex-1 font-copy">
			<Hero />
			<PlantedTrees />
		</Main>
	);
}

function Hero() {
	return (
		<article
			className={cn(
				'relative xl:mx-8 dark:xl:mx-0',
				'overflow-hidden rounded-3xl dark:rounded-none'
			)}
		>
			<div
				className={cn(
					packs.container,
					packs.innerPadding,
					'dark:px-0 dark:sm:px-0 dark:lg:px-0'
				)}
			>
				<div className="relative overflow-hidden rounded-3xl dark:rounded-none xl:static">
					<NextImage
						alt="View of the earth from space"
						className={cn(
							'absolute inset-0 aspect-video h-full w-full bg-black object-cover',
							'dark:rounded-none xl:aspect-auto'
						)}
						priority
						quality={100}
						src={heroImage}
					/>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"
					/>
					<div className="relative flex flex-col justify-end pb-28 pt-36 text-center text-white [text-wrap:balance]">
						<h1>
							<span
								className={cn(
									'block font-display text-[min(20vw,12rem)] font-bold leading-none text-transparent',
									'bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent'
								)}
							>
								Earth
								<Dot />
							</span>
						</h1>
						<div className="mx-auto max-w-xl space-y-8 text-xl">
							<p>
								That’s here. An evolving digital ecosystem that we strive to
								care for. A place you share with us, working side-by-side for a
								better future.
							</p>

							<NextLink
								className={cn(
									'inline-flex items-center rounded-full border border-transparent bg-docs-primary px-6 py-3 text-base text-white shadow-sm transition duration-500 font-regular',
									'focus:outline-none focus:ring-2 focus:ring-docs-primary focus:ring-offset-2',
									'hover:bg-docs-primary-light',
									'dark:ring-offset-gray-800'
								)}
								href="/content/getting-started"
							>
								Get started
							</NextLink>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

async function PlantedTrees() {
	const { amount } = await getPlantedTreesAmount();
	if (!amount) return null;
	return (
		<div
			className={cn('pb-10 text-center', packs.container, packs.innerPadding)}
		>
			<p>Our customers & employees have helped us plant</p>
			<p className="font-display text-5xl font-bold">
				{amount.toLocaleString()} trees
				<Dot />
			</p>
			<a
				className={cn('text-docs-primary', packs.focusVisible)}
				href="https://anywhereworks.com/tools"
			>
				Grow with us
			</a>
			<PlantedTreesIllustration />
		</div>
	);
}

async function getPlantedTreesAmount() {
	try {
		const response = await fetch(
			'https://script.googleusercontent.com/a/macros/anywhere.co/echo?user_content_key=gqFI-X4WSGQuQDeUk5_NybhMPaWBJwQMI0uhQ_UW4VbKNmRW8vPCIcCoScmsdsCSy9n6Gu7IdQsXWcByccHZN540GyYGKQ45m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_4kH3fgE7PWjIJYLcuTIG7dXIpf5m9CgH0E7stVSlMbbe6Jw_mEipr-3Kdfhsu0sj7zue8KSCcpOaXWlsAYEGg7iHGILVYLB-rHx5n2OdROdUOHVbAgACOhaQU9cF2Ya0WEVE3RhYAgI&lib=MFraFI-QB0pzDJP366pXUtqSS28H9-AZ8'
		);
		const result = (await response.json()) as {
			status: string;
			data: Array<Array<number>>;
		};
		if (result.status !== 'success') {
			throw new Error('Could not fetch planted trees');
		}

		const amount = result.data[0]?.[0];

		if (!amount) {
			throw new Error('Could not fetch planted trees');
		}

		return { amount };
	} catch (error) {
		// eslint-disable-next-line no-console
		console.error(error);
		return { amount: 0 };
	}
}
