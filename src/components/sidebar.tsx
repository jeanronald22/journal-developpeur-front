import clsx from 'clsx';
import {
	BracesIcon,
	LayoutDashboard,
	Library,
	SettingsIcon,
} from 'lucide-react';
import logo from '@/assets/logo.png';
import { subtitle } from './primitives';
import { Link } from '@heroui/link';
import { useLocation } from 'react-router-dom';
import ProfilCart from './profileCard';

const navigation = [
	{ name: 'Dasbord', href: '/', icon: LayoutDashboard },
	{ name: 'Snippets', href: '/Snippets', icon: BracesIcon },
	{ name: 'Catégories', href: '/categories', icon: Library },
	{ name: 'Paramètre', href: '/parametre', icon: SettingsIcon },
];
export default function SideBar({ collapsed }: { collapsed: boolean }) {
	const location = useLocation();

	return (
		<div
			className={clsx(
				'h-screen  shadow  transition-all duration-300 flex flex-col p-4 overflow-hidden ',
				collapsed ? 'w-20 items-center' : 'w-52 items-center'
			)}
		>
			<div
				className={clsx(
					'flex flex-col items-center justify-center mb-6 space-y-2 '
				)}
			>
				<img src={logo} alt="logo" />
				<p className="font-semibold">Snippet</p>
			</div>
			<nav className="space-y-2 w-full ">
				{navigation.map((item) => {
					const isActive = location.pathname === item.href;
					return (
						<Link
							key={item.name}
							// to={item.href}
							className={clsx(
								subtitle({
									class: 'flex items-center p-2 rounded hover:bg-foreground-50 transition w-full font-semibold ',
								}),
								collapsed ? 'justify-center' : 'space-x-3',
								isActive ? 'text-primary' : ''
							)}
							href={item.href}
						>
							<item.icon
								className={clsx(
									!collapsed ? 'h-5 w-5 ' : 'h-6 w-6 '
								)}
							/>

							{!collapsed && (
								<span className="text-base">{item.name}</span>
							)}
						</Link>
					);
				})}
			</nav>
			<div
				className={clsx(
					'flex-1 flex justify-center items-end ',
					collapsed ? 'hidden' : 'block'
				)}
			>
				<ProfilCart />
			</div>
		</div>
	);
}
