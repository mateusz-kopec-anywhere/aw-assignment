'use client';
import React from 'react';
import { ThreeColumnLayout } from './three-column-layout';
import { SidebarNavigationWithFilterChips } from './sidebar-navigation-filter-chip';
import { PostsList } from './posts-list';
import { PostsProvider } from './context/posts-context';
import { appCategoryAndPostProps } from '~/types/app';

const LayoutWrapper = ({ categoriesData, postsData }: appCategoryAndPostProps) => {
    return (
        <>
            <PostsProvider postsData={postsData} categoriesData={categoriesData}>
                <ThreeColumnLayout
                    leftSidebar={
                        <SidebarNavigationWithFilterChips />
                    }
                >
                    <PostsList />
                </ThreeColumnLayout>

            </PostsProvider>

        </>
    )
}

export default LayoutWrapper;