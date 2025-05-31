import api from '@/config/apiClient';
import { LOGIN, REGISTER } from '@/config/endpoint';
import { storeItem } from '@/lib/storage';
import { LoginResponse, PartialUser, RegisterResponse, User } from '@/types';
import { AxiosError } from 'axios';

export const register = async (user: User): Promise<RegisterResponse> => {
	return api
		.post<RegisterResponse>(REGISTER, user)
		.then((res) => {
			return { message: res.data.message };
		})
		.catch((error: AxiosError) => {
			const axiosError = error as AxiosError<{ message: string }>;
			console.error('Registration error:', axiosError);
			throw new Error(axiosError.response?.data?.username);
		});
};

export const login = async (credentials: PartialUser): Promise<string> => {
	try {
		const res = await api.post<LoginResponse>(LOGIN, credentials);
		storeItem('accesToken', res.data.access);
		storeItem('refreshToken', res.data.refresh);
		return 'Connexion réussie';
	} catch (error) {
		const axiosError = error as AxiosError<{ message: string }>;
		console.error('login error:', axiosError);
		throw new Error(axiosError.response?.data?.detail);
	}
};
