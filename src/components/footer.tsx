import NextLink from 'next/link';

import { AnywhereWorksLogo } from '~/components/vectors/anywhere-works-logo';
import { PledgePeopleNotBotsLogo } from '~/components/vectors/pledge-people-not-bots-logo';
import { packs } from '~/lib/packs';
import { siteConfig } from '~/lib/site-config';
import { cn } from '~/lib/utils';

export function Footer() {
	return (
		<footer className="flex-shrink-0 bg-gray-100 font-copy dark:bg-black">
			<div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 px-4 py-10 font-copy sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
					<div className="flex flex-col items-start gap-10">
						<div>
							<p className="text-muted-foreground">
								because <span className="sr-only">AnywhereWorks</span>
							</p>
							<AnywhereWorksLogo className="h-6 text-foreground" />
						</div>
						<a
							className={cn(
								'flex items-center gap-6 text-muted-foreground',
								packs.focusVisible
							)}
							href="https://anywhereworks.com/pledge-people-not-bots"
						>
							<PledgePeopleNotBotsLogo className="w-20 flex-shrink-0" />
							<p>
								We pledge to use real people in customer facing interactions.
							</p>
						</a>
					</div>
					<div className="flex flex-col gap-10 xl:col-start-3">
						<AppsNav />
					</div>
				</div>
				<div className="grid items-end gap-10 lg:grid-cols-2 xl:grid-cols-3">
					<LegalNav />
					<div className="flex flex-col items-start gap-6 xl:col-start-3">
						<SocialNav />
						<a
							className={cn(
								'flex flex-wrap items-center gap-6',
								packs.focusVisible
							)}
							href="https://anywhereworks.com/blue-dot"
						>
							<span>Cherish the Pale Blue Dot</span>
							<div className="h-3 w-3 rounded-full bg-docs-primary" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
function AppsNav() {
	const appsNavId = 'apps-nav';
	return (
		<nav aria-labelledby={appsNavId} className="flex flex-col gap-4">
			<h2 id={appsNavId}>Download the app</h2>
			<ul className="flex flex-col items-start gap-4" role="list">
				{siteConfig.appStores.map(({ href, label, icon: Icon }, index) => (
					<li key={index}>
						<NextLink
							className={cn('flex items-center gap-2', packs.focusVisible)}
							href={href}
						>
							<Icon className="h-9 text-muted-foreground" />
							<span className="sr-only">{label}</span>
						</NextLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

function LegalNav() {
	const legalNavId = 'legal-nav';
	return (
		<nav
			aria-labelledby={legalNavId}
			className="flex flex-wrap gap-6 xl:col-span-2"
		>
			<h2 className="sr-only" id={legalNavId}>
				Legal
			</h2>
			<span className="whitespace-nowrap text-muted-foreground">
				&copy; AnywhereWorks
			</span>
			<ul className="flex flex-wrap gap-6" role="list">
				{siteConfig.footerNav.secondary.map(({ href, label }, index) => (
					<li key={index}>
						<NextLink
							className={cn('whitespace-nowrap', packs.focusVisible)}
							href={href}
						>
							{label}
						</NextLink>
					</li>
				))}
			</ul>
			<span className="inline-flex gap-2">
				<span className="text-muted-foreground">CO2 408.71 ppm</span>
				<span aria-hidden>|</span>{' '}
				<a
					className={cn('font-regular', packs.focusVisible)}
					href="https://climate.nasa.gov/vital-signs/carbon-dioxide/"
				>
					Why are we CO2 dating?
				</a>
			</span>
		</nav>
	);
}

function SocialNav() {
	const socialNavId = 'social-nav';
	return (
		<nav
			aria-labelledby={socialNavId}
			className="flex flex-wrap items-center gap-6"
		>
			<h2 className="sr-only" id={socialNavId}>
				Social Links
			</h2>
			<ul className="flex flex-wrap gap-6" role="list">
				{siteConfig.socialLinks.map(({ href, label, icon: Icon }, index) => (
					<li key={index}>
						<NextLink
							className={cn('flex items-center gap-2', packs.focusVisible)}
							href={href}
						>
							<Icon className="h-5 w-5 text-muted-foreground" />
							<span className="sr-only">{label}</span>
						</NextLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
