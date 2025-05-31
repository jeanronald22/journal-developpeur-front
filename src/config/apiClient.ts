import axios from 'axios';
import { baseUrl, REFRESH } from './endpoint';
import { getItem } from '@/lib/storage';

const api = axios.create({
	baseURL: baseUrl,
});

//ajout du token d'accès sur chaque requête
api.interceptors.request.use((config) => {
	const token = getItem('accesToken');
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

// intercepteur de réponse pour gérer les erreurr 401 par exemple

api.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			// tente de rafraichir le token
			try {
				const refreshToken = getItem('refreshToken');
				if (refreshToken) {
					const response = await axios.post(`${baseUrl}${REFRESH}`, {
						access: refreshToken,
					});
					const newAccessToken = response.data.access;
					localStorage.setItem('accesToken', newAccessToken);
					originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
					return api(originalRequest); // rejoue la requête originale avec le nouveau token
				}
			} catch (refreshError) {
				// Échec du refresh (token refresh expiré ou invalide) → logout
				return Promise.reject(refreshError);
			}
		}
		return Promise.reject(error);
	}
);

export default api;
