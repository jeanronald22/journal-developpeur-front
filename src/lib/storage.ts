export const storeItem = (key: string, value: string): void => {
	localStorage.setItem(key, value);
};
export const getItem = (key: string): string | null => {
	const item = localStorage.getItem(key);
	return item ? item : null;
};
