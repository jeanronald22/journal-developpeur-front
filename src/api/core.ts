import api from '@/config/apiClient';
import { GET_LANG, GET_SNIPPETS } from '@/config/endpoint';
import { CreateSnippetForm, Language, Snippet } from '@/types';
import { AxiosError } from 'axios';

export const getLanguages = async (): Promise<Language[]> => {
	try {
		const res = await api.get<Language[]>(GET_LANG);
		return res.data;
	} catch (error) {
		const axiosError = error as AxiosError<{ message: string }>;
		console.error('errr lors de la recuperation des lang', axiosError);
		throw new Error(axiosError.response?.data.message || 'erreur inconue');
	}
};

export const createSnippet = async (data: CreateSnippetForm): Promise<void> => {
	try {
		await api.post(GET_SNIPPETS, {
			title: data.title,
			code: data.code,
			language: data.languageId,
		});
	} catch (error) {
		const axiosError = error as AxiosError<{ message: string }>;
		console.error('Erreur lors de la création du snippet:', axiosError);
		throw new Error(axiosError.response?.data.message || 'Erreur inconnue');
	}
};

export const getSnippets = async (search?: string): Promise<Snippet[]> => {
	try {
		const query = search ? `?search=${encodeURIComponent(search)}` : '';
		const response = await api.get<Snippet[]>(`${GET_SNIPPETS}${query}`);
		return response.data;
	} catch (error) {
		const axiosError = error as AxiosError<{ message: string }>;
		console.error(
			'Erreur lors de la récupération des snippets:',
			axiosError
		);
		throw new Error(axiosError.response?.data.message || 'Erreur inconnue');
	}
};
