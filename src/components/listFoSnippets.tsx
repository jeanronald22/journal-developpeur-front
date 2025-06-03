import { Snippet } from '@/types';
import SnippetCard from './SnippetCard';
import { Skeleton } from '@heroui/skeleton';

export default function ListFoSnippets({
	snippets,
	loading,
}: {
	snippets: Snippet[];
	loading: boolean;
}) {
	return (
		<div className="flex flex-wrap  gap-4 mt-10 max-w-7xl mx-auto items-center justify-center pb-24">
			{snippets.map((snippet) => (
				<Skeleton className="rounded-lg" isLoaded={loading}>
					<SnippetCard
						snippet={snippet}
						key={snippet.id}
						loading={loading}
					/>
				</Skeleton>
			))}
		</div>
	);
}
