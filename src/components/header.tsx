import { Button } from '@heroui/button';
import { SidebarClose, SidebarOpen } from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitch } from './theme-switch';
import { useMyStore } from '@/store/useSnippet';
import { Badge } from '@heroui/badge';

export default function Header({
	onToggleSidebar,
	title,
}: {
	onToggleSidebar: () => void;
	title: string;
}) {
	const [isToggle, setIsToggle] = useState(false);
	const totalSnippets = useMyStore((state) => state.totalSnippets);
	return (
		<header className="h-16  shadow px-6 flex items-center justify-between sticky top-0 z-10">
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
						<SidebarClose className="text-foreground" />
					) : (
						<SidebarOpen className="text-foreground" />
					)}
				</Button>
				<ThemeSwitch />
				<Badge
					content={totalSnippets}
					color="primary"
					shape="rectangle"
				>
					<h1 className="text-lg font-semibold text-foreground">
						{title}
					</h1>
				</Badge>
			</div>
		</header>
	);
}
