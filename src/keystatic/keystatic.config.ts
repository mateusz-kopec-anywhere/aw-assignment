import { config as createConfig } from '@keystatic/core';

import {
	authors,
	content,
	categories,
} from '~/keystatic/schemas/collections';

const shouldUseCloud = process.env.NODE_ENV !== 'development';

export const config = createConfig({
	storage: { kind: 'local' },
	collections: {
		authors,
		categories,
		content,
	},
});
