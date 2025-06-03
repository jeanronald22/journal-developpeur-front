import api from '@/config/apiClient';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseFetchOptions extends AxiosRequestConfig {
	autoFetch?: boolean;
}

const useFetch = <T = any>(
	url: string,
	options: UseFetchOptions = { autoFetch: false }
) => {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const fetchData = useCallback(
		async (params: Record<string, any> = {}): Promise<T> => {
			try {
				setLoading(true);
				setError(null);

				const response: AxiosResponse<T> = await api.get(url, {
					params,
					headers: { ...options.headers },
					...options,
				});

				setData(response.data);
				return response.data;
			} catch (err: any) {
				let errorMessage = 'Une erreur est survenue lors de la requête';

				if (err.response) {
					errorMessage = `Erreur ${err.response.status}: ${
						err.response.data?.message || err.response.statusText
					}`;
				} else if (err.request) {
					errorMessage =
						'Erreur de réseau - Impossible de joindre le serveur';
				} else {
					errorMessage = err.message;
				}

				setError(errorMessage);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[url, options]
	);

	return {
		data,
		loading,
		error,
		fetchData,
	};
};

export default useFetch;
