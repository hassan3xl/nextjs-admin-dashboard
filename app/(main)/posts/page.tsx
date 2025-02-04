import PostsTable from '@/components/posts/PostsTable';
import React from 'react';
import BackButton from '@/components/BackButton';
import PostPagination from '@/components/posts/PostPagination';
import {Pagination} from '@/components/ui/pagination';

const PostPage = () => {
	return (
		<>
			<BackButton text="go back" link="/" />
			<PostsTable />
			<PostPagination />
		</>
	);
};

export default PostPage;
