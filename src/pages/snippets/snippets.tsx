import EmptyView from '@/components/emptyView';
import DashboardLayout from '@/layouts/dasboad';
import { useDisclosure } from '@heroui/modal';
import { CircularProgress } from '@heroui/progress';
import AddSnippet from './addForm';
import { useEffect, useState } from 'react';
import { Snippet as SnippetType } from '@/types';
import { getSnippets } from '@/api/core';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Search } from 'lucide-react';
import ListFoSnippets from '@/components/listFoSnippets';
import { useMyStore } from '@/store/useSnippet';

export default function Snippet() {
	const [snippets, setSnippets] = useState<SnippetType[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string>('');
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [search, setSearch] = useState('');
	const { setTotalSnippets } = useMyStore();
	const fetch = async () => {
		try {
			setLoading(true);
			setError('');
			const data = await getSnippets(search);
			setSnippets(data);
		} catch (e) {
			setError('ee');
			console.log(e);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetch();
		setTotalSnippets(snippets);
	}, []);

	if (loading) {
		return (
			<DashboardLayout title="Snippets">
				<div className="w-full items-center justify-center h-screen flex">
					<CircularProgress size="lg" color="primary" />
				</div>
			</DashboardLayout>
		);
	}
	if (error) {
		return (
			<DashboardLayout title="Snippets">
				<div className="w-full items-center justify-center">
					<p>{error}</p>
				</div>
			</DashboardLayout>
		);
	}
	return (
		<DashboardLayout title="Snippets">
			<>
				<AddSnippet
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					onSuccess={fetch}
				/>
				<div className="flex space-x-2 mx-auto max-w-xl pt-10">
					<Input
						variant="faded"
						endContent={
							<Button
								isIconOnly
								onPress={() => fetch()}
								variant="light"
							>
								<Search />
							</Button>
						}
						placeholder="Search Snippets"
						value={search}
						onChange={(val) => {
							setSearch(val.target.value.trim());
						}}
					/>
					<Button
						variant="solid"
						color="primary"
						className="font-semibold"
						onPress={onOpen}
					>
						Ajouter
					</Button>
				</div>
				{snippets.length > 0 ? (
					<section className="h-screen ">
						<main className="">
							<ListFoSnippets
								snippets={snippets}
								loading={!loading}
							/>
						</main>
					</section>
				) : (
					<EmptyView
						message="Vous n'avez encore ajouté aucun snippet. Ajouter un snippet pour commencer !"
						onClick={onOpen}
						btnText="Ajouter un snippet"
					/>
				)}
			</>
		</DashboardLayout>
	);
}
