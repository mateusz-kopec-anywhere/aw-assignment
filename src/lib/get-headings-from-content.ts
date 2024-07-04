interface Content {
	level: number;
	type: string;
	children: Array<Object>;
}

export function getHeadingsFromContent(content: Content[]) {
	return content
		?.filter((child) => child.type === 'heading')
		.map((heading) => ({
			level: heading.level as number,
			label: heading.children.find((child) => child.text)?.text as string,
		}))
		.filter((heading) => heading.label);
}
