import { type DocumentElement } from '@keystatic/core';

export function getHeadingsFromContent(content: DocumentElement[]) {
	return content
		.filter((child) => child.type === 'heading')
		.map((heading) => ({
			level: heading.level as number,
			label: heading.children.find((child) => child.text)?.text as string,
		}))
		.filter((heading) => heading.label);
}
