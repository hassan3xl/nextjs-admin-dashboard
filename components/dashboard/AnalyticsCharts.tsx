'use client';

import React from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from 'recharts';
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from '@/components/ui/card';

import data from '@/data/analytics';

const AnalyticsCharts = () => {
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Analysis for Last year</CardTitle>
					<CardDescription>Views per month</CardDescription>
				</CardHeader>
				<CardContent>
					<div style={{width: '100%', height: '300'}}>
						<ResponsiveContainer>
							<LineChart width={1100} height={400} data={data}>
								<Line
									type="monotone"
									dataKey="pv"
									stroke="#8884d8"
								/>
								<CartesianGrid stroke="#ccc" />
								<XAxis dataKey="name" />
							</LineChart>
						</ResponsiveContainer>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default AnalyticsCharts;
