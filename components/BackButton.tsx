import React from 'react';
import {ArrowLeft, ArrowLeftCircle} from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
	text: string;
	link: string;
}

const BackButton = ({text, link}: BackButtonProps) => {
	return (
		<Link
			href={link}
			className="text-gray-500 hover:text-gray-700 flex items-center gap-1 font-bold mb-5">
			<ArrowLeftCircle size={18} /> {text}
		</Link>
	);
};

export default BackButton;
