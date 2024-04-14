import { collection, fields } from '@keystatic/core';

export const content = collection({
	label: 'Content',
	slugField: 'title',
	path: 'content/posts/*',
	format: {
		data: 'json',
		contentField: 'content',
	},
	schema: {
		title: fields.slug({ name: { label: 'Title' } }),
		authors: fields.array(
			fields.relationship({
				label: 'Author',
				collection: 'authors',
				validation: { isRequired: false },
			}),
			{
				label: 'Authors',
				itemLabel: (props) => props.value ?? 'Please select',
			}
		),
		category: fields.relationship({
			label: 'Category',
			collection: 'categories',
			validation: { isRequired: false },
		}),
		content: fields.document({
			label: 'Post',
			dividers: true,
			formatting: true,
			links: true,
			tables: true,
		}),
	},
});
