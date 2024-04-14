import { collection, fields } from '@keystatic/core';

export const authors = collection({
	label: 'Authors',
	slugField: 'name',
	path: 'content/authors/**',
	format: { data: 'json' },
	schema: {
		name: fields.slug({
			name: {
				label: 'Name',
				validation: {
					length: { min: 1 },
				},
			},
		}),
		links: fields.array(
			fields.object({
				title: fields.text({ label: 'Title' }),
				link: fields.url({
					label: 'URL',
					description:
						'Optionally link the author name to e.g. their social media.',
					validation: {
						isRequired: false,
					},
				}),
			}),
			{
				label: 'Links',
				itemLabel: (props) => props.fields.title.value,
			}
		),
	},
});
