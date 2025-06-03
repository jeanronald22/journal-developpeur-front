import Header from '@/components/header';
import SideBar from '@/components/sidebar';
import { useState } from 'react';

export default function DashboardLayout({
	children,
	title,
}: {
	children: React.ReactNode;
	title: string;
}) {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className="flex overflow-hidden  h-screen">
			<SideBar collapsed={collapsed} />

			<div className="flex-1 min-h-screen  ">
				<Header
					title={title}
					onToggleSidebar={() => setCollapsed((prev) => !prev)}
				/>

				<main className="  bg-foreground/5 h-full  overflow-y-scroll scrollbar-hide ">
					{children}
				</main>
			</div>
		</div>
	);
}
