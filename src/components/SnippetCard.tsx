import { Snippet } from '@/types';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/card';
import { MoreVertical, BookOpen, EraserIcon, Plug } from 'lucide-react';
import dayjs from 'dayjs';
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
} from '@heroui/dropdown'; // À adapter si tu utilises un autre composant
import { Button } from '@heroui/button';
import { subtitle, title } from './primitives';

export default function SnippetCard({ snippet }: { snippet: Snippet }) {
	return (
		<Card className="w-full border rounded-xl shadow-md p-2 space-y-2 transition hover:shadow-lg ">
			<CardHeader className="flex justify-between">
				<div>
					<h4
						className={subtitle({
							class: 'font-semibold text-lg',
						})}
					>
						{snippet.title}
					</h4>
					<p className="text-sm ">{snippet.language.name}</p>
				</div>

				{/* Menu contextuel */}
				<Dropdown>
					<DropdownTrigger className=" ">
						<MoreVertical className="w-5 h-5 cursor-pointer" />
					</DropdownTrigger>
					<DropdownMenu>
						<DropdownItem key="new">file</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</CardHeader>
			<CardBody>
				<div>
					<p className="text-sm ">
						Mis à jour :{' '}
						{dayjs(snippet.updated_at).format('DD/MM/YYYY')}
					</p>
				</div>
			</CardBody>
			<CardFooter>
				<Button isIconOnly>
					<Plug />
				</Button>
			</CardFooter>
		</Card>
	);
}
