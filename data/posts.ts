import {Post} from '@/types/post';

const posts: Post[] = [
	{
		id: '2',
		title: 'Exploring Quantum Computing',
		body: 'Quantum computing promises to solve problems that are currently unsolvable...',
		author: 'Alice Johnson',
		date: '2024-05-02',
		comments: [
			{id: '1', text: 'Fascinating topic!', username: 'Bob'},
			{
				id: '2',
				text: "Can't wait to see practical applications.",
				username: 'Charlie',
			},
		],
	},
	{
		id: '3',
		title: 'The Future of Space Exploration',
		body: 'With advancements in technology, space exploration is reaching new heights...',
		author: 'Neil Armstrong',
		date: '2024-05-03',
		comments: [
			{id: '1', text: 'Inspiring read!', username: 'Eve'},
			{id: '2', text: "What's next for Mars missions?", username: 'Dave'},
		],
	},
	{
		id: '4',
		title: 'Blockchain Beyond Cryptocurrency',
		body: 'Blockchain technology is finding applications beyond just cryptocurrencies...',
		author: 'Satoshi Nakamoto',
		date: '2024-05-04',
		comments: [
			{id: '1', text: 'Very informative!', username: 'Frank'},
			{id: '2', text: 'How secure is blockchain?', username: 'Grace'},
		],
	},
	{
		id: '5',
		title: 'The Impact of 5G Technology',
		body: '5G is set to transform the way we connect and communicate...',
		author: 'Elon Musk',
		date: '2024-05-05',
		comments: [
			{id: '1', text: 'Exciting times ahead!', username: 'Hank'},
			{id: '2', text: 'What about the health concerns?', username: 'Ivy'},
		],
	},
	{
		id: '6',
		title: 'Sustainable Energy Solutions',
		body: 'Exploring renewable energy sources is crucial for a sustainable future...',
		author: 'Greta Thunberg',
		date: '2024-05-06',
		comments: [
			{
				id: '1',
				text: 'We need more initiatives like this.',
				username: 'Jack',
			},
			{
				id: '2',
				text: "What's the role of nuclear energy?",
				username: 'Karen',
			},
		],
	},
	{
		id: '7',
		title: 'Advancements in Biotechnology',
		body: 'Biotechnology is paving the way for groundbreaking medical treatments...',
		author: 'Jennifer Doudna',
		date: '2024-05-07',
		comments: [
			{id: '1', text: 'CRISPR is revolutionary!', username: 'Leo'},
			{
				id: '2',
				text: 'Ethical concerns need addressing.',
				username: 'Mona',
			},
		],
	},
	{
		id: '8',
		title: 'The Evolution of E-commerce',
		body: 'E-commerce has transformed the retail landscape...',
		author: 'Jeff Bezos',
		date: '2024-05-08',
		comments: [
			{id: '1', text: 'Convenience at its best!', username: 'Nina'},
			{id: '2', text: 'What about small businesses?', username: 'Oscar'},
		],
	},
	{
		id: '9',
		title: 'The Role of Big Data in Decision Making',
		body: 'Big data analytics is crucial for informed decision-making...',
		author: 'Sheryl Sandberg',
		date: '2024-05-09',
		comments: [
			{id: '1', text: 'Data is the new oil!', username: 'Paul'},
			{id: '2', text: 'Privacy concerns are real.', username: 'Quincy'},
		],
	},
	{
		id: '10',
		title: 'The Future of Autonomous Vehicles',
		body: 'Self-driving cars are set to revolutionize transportation...',
		author: 'Elon Musk',
		date: '2024-05-10',
		comments: [
			{id: '1', text: "Can't wait to try one!", username: 'Rachel'},
			{id: '2', text: 'Safety is a big concern.', username: 'Steve'},
		],
	},
	{
		id: '11',
		title: 'The Rise of Remote Work',
		body: 'Remote work is becoming the new norm...',
		author: 'Tim Ferriss',
		date: '2024-05-11',
		comments: [
			{id: '1', text: 'Flexibility is key!', username: 'Tina'},
			{id: '2', text: 'What about team collaboration?', username: 'Umar'},
		],
	},
	{
		id: '12',
		title: 'The Importance of Cybersecurity',
		body: 'As technology advances, cybersecurity becomes more critical...',
		author: 'Kevin Mitnick',
		date: '2024-05-12',
		comments: [
			{id: '1', text: 'Stay safe online!', username: 'Vera'},
			{id: '2', text: 'How to protect personal data?', username: 'Walt'},
		],
	},
	{
		id: '13',
		title: 'The Future of Education',
		body: 'Technology is reshaping the way we learn...',
		author: 'Sal Khan',
		date: '2024-05-13',
		comments: [
			{id: '1', text: 'Online learning is the future!', username: 'Xena'},
			{id: '2', text: 'What about the digital divide?', username: 'Yara'},
		],
	},
	{
		id: '14',
		title: 'The Power of Social Media',
		body: 'Social media has a profound impact on society...',
		author: 'Mark Zuckerberg',
		date: '2024-05-14',
		comments: [
			{id: '1', text: 'Connectivity is amazing!', username: 'Zack'},
			{id: '2', text: 'But what about mental health?', username: 'Alice'},
		],
	},
	{
		id: '15',
		title: 'The Ethics of AI',
		body: 'As AI becomes more prevalent, ethical considerations are paramount...',
		author: 'Stuart Russell',
		date: '2024-05-15',
		comments: [
			{id: '1', text: "Ethics can't be ignored!", username: 'Bob'},
			{id: '2', text: 'Who regulates AI?', username: 'Charlie'},
		],
	},
	{
		id: '16',
		title: 'The Future of Healthcare',
		body: 'Technological advancements are transforming healthcare...',
		author: 'Atul Gawande',
		date: '2024-05-16',
		comments: [
			{
				id: '1',
				text: 'Telemedicine is a game-changer!',
				username: 'Dana',
			},
			{id: '2', text: 'What about data privacy?', username: 'Evan'},
		],
	},
	{
		id: '17',
		title: 'The Impact of Climate Change',
		body: 'Climate change is one of the most pressing issues of our time...',
		author: 'Al Gore',
		date: '2024-05-17',
		comments: [
			{id: '1', text: 'We need to act now!', username: 'Fiona'},
			{id: '2', text: 'What can individuals do?', username: 'George'},
		],
	},
	{
		id: '18',
		title: 'The Future of Food Technology',
		body: 'Innovations in food technology are changing what we eat...',
		author: 'Josh Tetrick',
		date: '2024-05-18',
		comments: [
			{
				id: '1',
				text: 'Lab-grown meat is fascinating!',
				username: 'Hannah',
			},
			{id: '2', text: 'What about traditional farming?', username: 'Ian'},
		],
	},
	{
		id: '19',
		title: 'The Role of Robotics in Manufacturing',
		body: 'Robotics is revolutionizing the manufacturing industry...',
		author: 'Rodney Brooks',
		date: '2024-05-19',
		comments: [
			{id: '1', text: 'Automation is the future!', username: 'Jill'},
			{id: '2', text: 'What about job losses?', username: 'Kevin'},
		],
	},
	{
		id: '20',
		title: 'The Future of Virtual Reality',
		body: 'Virtual reality is opening up new possibilities...',
		author: 'Palmer Luckey',
		date: '2024-05-20',
		comments: [
			{
				id: '1',
				text: 'Immersive experiences are amazing!',
				username: 'Laura',
			},
			{id: '2', text: 'What about motion sickness?', username: 'Mike'},
		],
	},
];

export default posts;
