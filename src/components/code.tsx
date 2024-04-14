import { type Highlighter, renderToHtml } from 'shiki';

export function Code({
	children,
	highlighter,
	language,
}: {
	children: string;
	highlighter: Highlighter;
	language?: string;
}) {
	let codeBlock = children;
	try {
		const tokens = highlighter.codeToThemedTokens(children, language);
		codeBlock = renderToHtml(tokens, {
			elements: {
				pre({ children }) {
					return `<pre class="bg-[#252b37] overflow-auto" aria-label="Code example" tabIndex="-1">${children}</pre>`;
				},
			},
		});
	} catch (_error) {
		throw new Error(
			`Failed to highlight code block with language "${language}"`
		);
	}

	return <div dangerouslySetInnerHTML={{ __html: codeBlock }} />;
}
