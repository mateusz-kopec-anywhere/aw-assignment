'use client';

import { useEffect, useState } from 'react';
import { SidebarFilter } from '~/components/sidebar-filter';
import { ThreeColumnLayout } from '~/components/three-column-layout';
import { PostsList } from '~/components/posts-list';

export default function PostsListingPage() {
	const [posts, setPosts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [filteredCategories, setFilteredCategories] = useState([]);
	const [filteredPosts, setFilteredPosts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3000/api/posts')
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPosts(data);
			});
	}, []);

	useEffect(() => {
		if (posts.length) {
			const cat = [];
			posts.forEach((book) => {
				if (!cat.includes(book?.entry?.category)) cat.push(book.entry.category);
			});
			setCategories(cat);
			setFilteredCategories(cat);
		}
	}, [posts]);

	useEffect(() => {
		const postslist = [];
		posts.forEach((post) => {
			if (filteredCategories.includes(post?.entry?.category))
				postslist.push(post);
		});
		setFilteredPosts(postslist);
	}, [filteredCategories]);

	const updateFilteredCategories = (category: string) => {
		filteredCategories.includes(category)
			? setFilteredCategories(
					filteredCategories.filter((item) => item !== category)
			  )
			: setFilteredCategories([...filteredCategories, category]);
	};

	return (
		<ThreeColumnLayout
			leftSidebar={
				<SidebarFilter
					heading="Categories"
					availableCategories={categories}
					filteredCategories={filteredCategories}
					onCategoryClick={updateFilteredCategories}
				/>
			}
		>
			<PostsList
				posts={filteredPosts.map(({ slug, entry: { title, category } }) => ({
					slug,
					entry: { title, category },
				}))}
			/>
		</ThreeColumnLayout>
	);
}
