import { subtitle } from '@/components/primitives';
import { Button } from '@heroui/button';

import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@heroui/modal';
import { CreateSnippetForm, Language } from '@/types';
import { Input } from '@heroui/input';
import { useEffect, useState } from 'react';
import Editeur from '@/components/Editor';
import { createSnippet, getLanguages } from '@/api/core';
type AddProps = {
	isOpen: boolean;
	onOpenChange: () => void;
	onSuccess: () => void;
};

export default function AddSnippet({
	isOpen,
	onOpenChange,
	onSuccess,
}: AddProps) {
	const [languages, setLanguages] = useState<Language[] | []>([]);
	const [data, setData] = useState<CreateSnippetForm>({
		code: '//Veillez saisir snippet code ici',
		language: '',
		title: '',
		languageId: 0,
	});
	const onSubmit = async () => {
		try {
			await createSnippet(data);
			onSuccess();
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		const fetch = async () => {
			try {
				const data = await getLanguages();
				setLanguages(data);
			} catch (e) {
				console.log(e);
			}
		};
		fetch();
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			shadow="lg"
			size="3xl"
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>
							<p
								className={subtitle({
									class: 'font-semibold ',
								})}
							>
								Créer un nouveau snippet
							</p>
						</ModalHeader>
						<ModalBody>
							<form className="space-y-4 ">
								<div className="flex space-x-2">
									<Input
										value={data.title}
										variant="flat"
										label="Titre"
										onValueChange={(value) =>
											setData((prev) => ({
												...prev,
												title: value,
											}))
										}
									/>
									<select
										value={data.language}
										className="rounded-lg bg-foreground/2"
										onChange={(val) =>
											setData((prev) => ({
												...prev,
												language: val.target.value,
												languageId:
													languages.find(
														(lang) =>
															lang.name ===
															val.target.value
													)?.id || 0,
											}))
										}
									>
										{languages.map((lang) => (
											<option key={lang.id}>
												{lang.name}
											</option>
										))}
									</select>
								</div>
								<Editeur
									value={data.code}
									onValChange={(value) =>
										setData((prev) => ({
											...prev,
											code: value || '',
										}))
									}
									language={data.language}
								/>
							</form>
						</ModalBody>
						<ModalFooter>
							<Button
								color="danger"
								variant="light"
								onPress={onClose}
							>
								Close
							</Button>
							<Button
								color="primary"
								onPress={onSubmit}
								type="submit"
							>
								Action
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	);
}
