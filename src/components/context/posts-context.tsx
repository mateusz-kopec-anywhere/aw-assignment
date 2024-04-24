'use client'
import { createContext, useState, useEffect } from "react";
import { postsType } from '~/types/posts';
import { categoriesType } from "~/types/categories";
import { PostsContextType, ProviderProps } from "~/types/app";

export const PostsContext = createContext<PostsContextType>({
    posts: [],
    categories: [],
    selectedCategory: [],
    filteredPosts: [],
    handleCategorySelection: () => { },
    handleCategoryRemove: () => { },
});
export const PostsProvider = ({ children, postsData, categoriesData }: ProviderProps) => {
    const [posts, setPosts] = useState<postsType>(postsData);
    const [categories, setCategories] = useState<categoriesType>(categoriesData);
    const [selectedCategory, setSelectedCategory] = useState<categoriesType>([]);
    const [filteredPosts, setFilteredPosts] = useState<postsType>([]);

    const handleCategorySelection = (category) => {
        const categoriesFiltered = selectedCategory.map(item => item.entry.category);
        if (categoriesFiltered.includes(category.entry.category)) return;
        setSelectedCategory([...selectedCategory, category]);
        const selectedCategories = [...selectedCategory, category];
        setFilteredPosts(filterPosts(selectedCategories));
    };
    const handleCategoryRemove = (e) => {
        const categoryRemoved = e.target.id;
        setSelectedCategory(selectedCategory.filter((cat) => cat.entry.category !== categoryRemoved));
        const selectedCategories = selectedCategory.filter((cat) => cat.entry.category !== categoryRemoved);
        setFilteredPosts(selectedCategories.length === 0 ? postsData : filterPosts(selectedCategories));
    }
    const filterPosts = (cat) => {
        const categories = cat.map(item => item.entry.category);
        return posts.filter((post) => categories.includes(post.entry.category));
    }

    useEffect(() => {
        setPosts(postsData);
        setCategories(categoriesData);
        setFilteredPosts(postsData);
    }, [postsData, categoriesData])

    return (
        <PostsContext.Provider value={{ posts, categories, selectedCategory, handleCategorySelection, handleCategoryRemove, filteredPosts }}>
            {children}
        </PostsContext.Provider>
    )
}

