import type { AxiosResponse } from 'axios';
import axios from 'axios';
import toast from 'react-hot-toast';

export const mainAxios = axios.create({
	withCredentials: true,
});

mainAxios.interceptors.response.use(
	(response): AxiosResponse<unknown, unknown> => {
		return response;
	},
	async (error) => {
		if (error.response) {
			const status = error.response.status;
			const message =
				error.response.data?.message ||
				`Request failed with status ${status}`;
			toast.error(message);
		} else {
			toast.error('Network Error: Please check your connection');
		}

		return Promise.reject(error);
	},
);
