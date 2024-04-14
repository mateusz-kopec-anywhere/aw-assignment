import { type Metadata } from 'next';

import { siteConfig } from '~/lib/site-config';

export const metadata = {
	title: {
		default: siteConfig.title,
		template: `%s | ${siteConfig.title}`,
	},
	description: siteConfig.description,
	metadataBase: new URL(siteConfig.baseUrl),
	authors: [
		{
			name: siteConfig.title,
			url: siteConfig.baseUrl,
		},
	],
	icons: {
		apple: '/apple-touch-icon.png',
		icon: [
			{
				rel: 'icon',
				sizes: 'any',
				type: 'image/x-icon',
				url: '/favicon.ico',
			},
			{
				rel: 'icon',
				type: 'image/svg+xml',
				url: '/favicon.svg',
			},
			{
				rel: 'icon',
				type: 'image/svg+xml',
				url: '/favicon-dark.svg',
				media: '(prefers-color-scheme: dark)',
			},
		],
	},
	openGraph: {
		title: siteConfig.title,
		description: siteConfig.description,
		url: siteConfig.baseUrl,
		siteName: siteConfig.title,
		// images: [
		//   {
		//     url: `${siteConfig.baseUrl}/og.jpg`,
		//     width: 1920,
		//     height: 1080,
		//   },
		// ],
		locale: 'en',
		type: 'website',
	},
	// twitter: {
	//   title: siteConfig.title,
	//   card: "summary_large_image",
	// },
} satisfies Metadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
