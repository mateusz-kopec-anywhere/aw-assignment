import {
	DocumentRenderer as KeystaticDocumentRenderer,
	type DocumentRendererProps,
} from '@keystatic/core/renderer';
import { getHighlighter } from 'shiki';

import {
	getDocumentRenderers,
} from '~/keystatic/renderers';

export async function DocumentRenderer(
	props: DocumentRendererProps & { liveCode?: boolean }
) {
	const highlighter = await getHighlighter({
		theme: 'poimandres',
	});
	const {
		renderers = getDocumentRenderers(highlighter),
		...consumerProps
	} = props;

	return (
		<KeystaticDocumentRenderer
			renderers={renderers}
			{...consumerProps}
		/>
	);
}
