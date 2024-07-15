import { notFound } from 'next/navigation';

import { DocumentRenderer } from '~/keystatic/document-renderer';
import { reader } from '~/keystatic/reader';

export async function generateStaticParams() {
	const slugs = await reader.collections.content.list();
	return slugs.map((slug) => ({
		slug,
	}));
}

export default async function Post({ params }: { params: { slug: string } }) {
	const post = await reader.collections.content.read(params.slug);
	if (!post) notFound();

	return (
		<div className="prose dark:prose-invert">
			<h1 className="text-4xl font-strong">{post.title}</h1>
			<span>Author: {post.authors}</span>
			{/* <DocumentRenderer document={await post.content()} /> */}
		</div>
	);
}
