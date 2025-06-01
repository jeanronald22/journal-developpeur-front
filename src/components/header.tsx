import { Button } from '@heroui/button';
import { SidebarClose, SidebarOpen } from 'lucide-react';
import { useState } from 'react';

export default function Header({
	onToggleSidebar,
	title,
}: {
	onToggleSidebar: () => void;
	title: string;
}) {
	const [isToggle, setIsToggle] = useState(false);
	return (
		<header className="h-16 bg-white shadow px-6 flex items-center justify-between sticky top-0 z-10">
			<div className="flex items-center space-x-4">
				<Button
					onPress={() => {
						onToggleSidebar();
						setIsToggle(!isToggle);
					}}
					className="transition"
					isIconOnly
					size="sm"
					variant="flat"
				>
					{!isToggle ? (
						<SidebarClose className="text-gray-600" />
					) : (
						<SidebarOpen className="text-gray-600" />
					)}
				</Button>
				<h1 className="text-lg font-semibold text-gray-600">{title}</h1>
			</div>
		</header>
	);
}
