import { DocumentElement } from '@keystatic/core';
export type postsType = {
    slug: string;
    entry: {
        title: string;
        authors: readonly string[];
        category: string;
        content?: () => Promise<DocumentElement[]>;
    };
}[];