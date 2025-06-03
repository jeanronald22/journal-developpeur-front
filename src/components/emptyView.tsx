import { Image } from '@heroui/image';
import empty from '@/assets/empty.png';
import { Button } from '@heroui/button';
import { subtitle } from './primitives';

type EmptyViewProps = {
	src?: string;
	message?: string;
	onClick?: () => void;
	btnText?: string;
};

export default function EmptyView({
	src = empty,
	message,
	onClick,
	btnText,
}: EmptyViewProps) {
	return (
		<div className="flex flex-col items-center justify-center text-center py-8 ">
			<Image src={src} width={500} alt="Illustration de liste vide" />
			<p className={subtitle({ class: 'mt-4' })}>
				{message || 'Aucun élément dans cette liste.'}
			</p>
			{onClick && (
				<Button
					onPress={onClick}
					className="mt-6 px-6 py-2 font-semibold rounded-lg transition"
					color="primary"
				>
					{btnText || 'Ajouter un élément'}
				</Button>
			)}
		</div>
	);
}
