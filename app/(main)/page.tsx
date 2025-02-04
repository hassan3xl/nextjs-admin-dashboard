import DashboardCard from '@/components/dashboard/DashboardCard';
import {Folder, MessageCircle, Newspaper, User} from 'lucide-react';
import PostsTable from '@/components/posts/PostsTable';
import AnalyticsCharts from '@/components/dashboard/AnalyticsCharts';

export default function Home() {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
				<DashboardCard
					title="posts"
					count={126}
					icon={<Newspaper className="text-slate-500" size={72} />}
				/>
				<DashboardCard
					title="categories"
					count={17}
					icon={<Folder className="text-slate-500" size={72} />}
				/>
				<DashboardCard
					title="users"
					count={950}
					icon={<User className="text-slate-500" size={72} />}
				/>
				<DashboardCard
					title="comments"
					count={6203}
					icon={
						<MessageCircle className="text-slate-500" size={72} />
					}
				/>
			</div>
			<AnalyticsCharts />
			<PostsTable title="Latest Posts" limit={5} />
		</>
	);
}
