import { type DocumentRendererProps } from '@keystatic/core/renderer';
import NextLink from 'next/link';
import { type Highlighter } from 'shiki';

import { Code } from '~/components/code';
import { Heading } from '~/components/heading';
import { InlineCode } from '~/components/inline-code';

export function getDocumentRenderers(
	highlighter: Highlighter,
) {
	return {
		block: {
			code(props) {
				return <Code {...props} highlighter={highlighter} />;
			},
			heading(props) {
				return <Heading {...props} isAnchor={props.level !== 1} />;
			},
		},
		inline: {
			code(props) {
				return <InlineCode {...props} />;
			},
			link(props) {
				if (props.href.startsWith('/')) {
					return <NextLink {...props} />;
				}
				return <a {...props} />;
			},
		},
	} satisfies DocumentRendererProps['renderers'];
}
