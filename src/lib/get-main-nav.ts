import { reader } from '~/keystatic/reader';

export async function getCommonNav() {
	const [content] = await Promise.all([reader.collections.content.all()]);

	return {
		home: {
			label: 'Home',
			href: '/',
			subNav: [],
		},
		content: {
			label: 'Posts',
			href: '/posts',
			subNav: content.map((item) => ({
				label: item.entry.title,
				href: `/posts/${item.slug}`,
			})),
		},
	};
}

type CommonNav = Awaited<ReturnType<typeof getCommonNav>>;

export function getMainNav({ content }: CommonNav) {
	return [content];
}

export type MainNav = ReturnType<typeof getMainNav>;
