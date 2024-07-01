"use client"

import { useState, useEffect } from 'react';
import { SidebarNavigation } from '~/components/sidebar-navigation';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';
import { SidebarCategories } from '~/components/sidebar-categories';

export default function PostsListingPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchPostsData = async () => {
    const data = await fetch("http://localhost:3000/api/posts")
    return data.json()
  }

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await fetchPostsData();
      setPosts(allPosts);

      const allCategories = allPosts.reduce((acc, post) => {
        post.entry.category.split(" ").forEach(cat => {
          if (!acc.includes(cat)) {
            acc.push(cat);
          }
        });
        return acc;
      }, []);

      setCategories(allCategories);
      setSelectedCategories(allCategories)
    }

    fetchPosts();
  }, []);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredPosts = posts.filter(post =>
    selectedCategories.includes(post.entry.category)
  );

  return (
    <ThreeColumnLayout
      leftSidebar={
        <SidebarCategories
          heading={{
            id: 'categories-heading',
            label: 'Categories',
          }}
          catItems={categories}
          setSelectedCategories={(cat: string) => handleCategoryClick(cat)}
          selectedCategories={selectedCategories}
        />
      }
    >
      <PostsList posts={filteredPosts.map(({ slug, entry: { title, category } }) => ({
        slug,
        entry: { title, category },
      }))} />
    </ThreeColumnLayout>
  );
}
