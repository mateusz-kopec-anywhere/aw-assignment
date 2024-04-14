import slugify from '@sindresorhus/slugify';

import { packs } from '~/lib/packs';
import { cn } from '~/lib/utils';

type NativeHeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export type HeadingProps = NativeHeadingProps & {
	isAnchor?: boolean;
	level: 1 | 2 | 3 | 4 | 5 | 6;
	textAlign?: 'center' | 'end';
};

export function Heading({
	children,
	className,
	isAnchor,
	level,
	textAlign,
	...consumerProps
}: HeadingProps) {
	const Tag = `h${level}` as const;

	const alignmentClass = getAlignmentClass(textAlign);

	if (isAnchor) {
		const slug = getSlug(children);
		return (
			<a
				className={cn('group relative block no-underline', packs.focusVisible)}
				href={`#${slug}`}
				id={slug}
			>
				<Tag
					{...consumerProps}
					className={cn(alignmentClass, '[text-wrap:balance]', className)}
				>
					{children}
				</Tag>
			</a>
		);
	}

	return (
		<Tag
			{...consumerProps}
			className={cn(alignmentClass, '[text-wrap:balance]', className)}
		>
			{children}
		</Tag>
	);
}

function getAlignmentClass(textAlign: HeadingProps['textAlign']) {
	switch (textAlign) {
		case 'center':
			return 'text-center';
		case 'end':
			return 'text-end';
		default:
			return '';
	}
}

function getSlug(node: React.ReactNode) {
	return slugify(getTextNode(node));
}

function getTextNode(node: React.ReactNode): string {
	if (!node) {
		return '';
	}

	if (typeof node === 'string') {
		return node;
	}

	if (typeof node === 'number') {
		return String(node);
	}

	if (
		typeof node === 'object' &&
		'text' in node &&
		typeof node.text === 'string'
	) {
		return node.text;
	}

	if (node instanceof Array) {
		return node.map(getTextNode).join('');
	}

	if (typeof node === 'object' && 'props' in node && 'node' in node.props) {
		return getTextNode(node.props.node);
	}

	return '';
}
