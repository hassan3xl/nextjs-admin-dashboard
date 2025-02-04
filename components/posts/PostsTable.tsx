import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	TableHeader,
	TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import {Post} from '@/types/post';
import post from '@/data/posts';

interface PostsTableProps {
	limit?: number;
	title?: string;
}

const PostsTable = ({limit, title}: PostsTableProps) => {
	// sort post on deceasing order base on date
	const sortedPost: Post[] = [...post].sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});
	// filter post to limit
	const filteredPost = limit ? sortedPost.slice(0, limit) : sortedPost;
	return (
		<div className="mt-10">
			<h3 className="text-2xl mb-4 font-semibold">
				{title ? title : 'Posts'}
			</h3>
			<Table>
				<TableCaption>List of recent Posts</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>Title</TableHead>
						<TableHead className="hidden md:table-cell">
							Author
						</TableHead>
						<TableHead className="text-right hidden md:table-cell">
							Date
						</TableHead>
						<TableHead>View</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{filteredPost.map((post: Post) => (
						<TableRow key={post.id}>
							<TableCell>{post.title}</TableCell>
							<TableCell className="hidden md:table-cell">
								{post.author}
							</TableCell>
							<TableCell className="text-right hidden md:table-cell">
								{post.date}
							</TableCell>
							<TableCell>
								<Link href={`/posts/edit/${post.id}`}>
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-boldpy-2 px-4 rounded text-xs">
										Edit
									</button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default PostsTable;
