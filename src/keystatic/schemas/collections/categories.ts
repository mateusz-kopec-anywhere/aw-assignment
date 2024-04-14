import { collection, fields } from '@keystatic/core';

export const categories = collection({
	label: 'Category',
	slugField: 'category',
	path: 'content/categories/**',
	format: { data: 'json' },
	schema: {
		category: fields.slug({
			name: {
				label: 'Category',
				validation: {
					length: { min: 1 },
				},
			},
		}),
	},
});
