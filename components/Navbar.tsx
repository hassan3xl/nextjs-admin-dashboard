import Link from 'next/link';
import React from 'react';
import {Avatar, AvatarImage, AvatarFallback} from './ui/avatar';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ThemeTogler from '@/components/ThemeTogler';

const Navbar = () => {
	return (
		<div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between text-white">
			<Link href="/">
				<h2>QTS Press</h2>
			</Link>

			<div className="flex items-center">
				<ThemeTogler />

				<DropdownMenu>
					<DropdownMenuTrigger className="focus:outline-none">
						<Avatar>
							<AvatarImage
								src="https://github.com/shadcn.png"
								alt="@shadcn"
							/>
							<AvatarFallback className="text-black">
								BT
							</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Link href="/profile">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Link href="/auth">Logout</Link>
						</DropdownMenuItem>
						<DropdownMenuItem>Team</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default Navbar;
