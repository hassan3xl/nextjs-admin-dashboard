import ThemeTogler from '@/components/ThemeTogler';
import React from 'react';

const AuthLayout = ({children}: {children: React.ReactNode}) => {
	return (
		<div className="h-[100vh] flex items-center justify-center relative">
			<div className="absolute bottom-2 text-white right-0">
				<ThemeTogler />
			</div>
			{children}
		</div>
	);
};

export default AuthLayout;
