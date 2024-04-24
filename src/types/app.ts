import { categoriesType } from "./categories";
import { postsType } from "./posts";

export type appCategoryAndPostProps = {
    categoriesData: categoriesType;
    postsData: postsType;
};

export type ProviderProps = {
    categoriesData: categoriesType;
    postsData: postsType;
    children: React.ReactNode;
};
export type PostsContextType = {
    posts: postsType;
    categories: categoriesType;
    selectedCategory: categoriesType;
    filteredPosts: postsType;
    handleCategorySelection: (category: any) => void;
    handleCategoryRemove: (e: any) => void;
};
export type SidebarNavigationType = {
    navGroups: Array<{
        heading: { id: string; label: string };
        navItems: Array<{
            href: string; label: string;
        }>;
    }>;
};