import { Snippet } from '@/types';
import { create } from 'zustand';

type Store = {
	totalSnippets: number;
	setTotalSnippets: (snippets: Snippet[]) => void;
};

export const useMyStore = create<Store>((set) => ({
	totalSnippets: 0,
	setTotalSnippets: (snippets) => set({ totalSnippets: snippets.length }),
}));
