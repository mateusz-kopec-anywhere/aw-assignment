import { AppStoreLogo } from '~/components/vectors/app-store';
import { FacebookIcon } from '~/components/vectors/facebook-icon';
import { GooglePlayLogo } from '~/components/vectors/google-play';
import { InstagramIcon } from '~/components/vectors/instagram-icon';
import { LinkedInIcon } from '~/components/vectors/linkedin-icon';
import { TwitterIcon } from '~/components/vectors/twitter-icon';
import { YouTubeIcon } from '~/components/vectors/youtube-icon';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	title: 'FE assignment',
	description: 'Front end developer assignment',
	baseUrl: 'https://anywhereworks.com/',
	footerNav: {
		primary: [
			...(process.env.NODE_ENV === 'development'
				? [
						{
							label: 'Login',
							href: '/keystatic',
						},
				  ]
				: []),
			// {
			// 	label: 'Contact Us',
			// 	href: '#',
			// },
		],
		secondary: [
			{
				label: 'Terms of Use',
				href: 'https://anywhereworks.com/terms',
			},
			// {
			// 	label: 'Terms of Service',
			// 	href: '#',
			// },
			{
				label: 'Privacy',
				href: 'https://anywhereworks.com/privacy-policy',
			},
			// {
			// 	label: 'Sitemap',
			// 	href: '#',
			// },
		],
	},
	appStores: [
		{
			label: 'Google Play',
			href: 'https://play.google.com/store/apps/details?id=com.full.aw',
			icon: GooglePlayLogo,
		},
		{
			label: 'App Store',
			href: 'https://apps.apple.com/au/app/anywhere-app/id1318693182',
			icon: AppStoreLogo,
		},
	],
	socialLinks: [
		{
			label: 'Facebook',
			href: 'https://www.facebook.com/AnywhereWorks',
			icon: FacebookIcon,
		},
		{
			label: 'Instagram',
			href: 'https://www.instagram.com/becauseanywhereworks/',
			icon: InstagramIcon,
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/company/anywhereworks/',
			icon: LinkedInIcon,
		},
		{
			label: 'Twitter',
			href: 'https://twitter.com/1DayAnywhere',
			icon: TwitterIcon,
		},
		{
			label: 'YouTube',
			href: 'https://www.youtube.com/@anywhereworks',
			icon: YouTubeIcon,
		},
	],
};
