import axios from "axios";
import { useRequestToken } from "./composables/requestToken.js";

const { refreshToken } = useRequestToken();

export default {
	install(app) {
		const rscAccessToken = localStorage.getItem("rscAccessToken");
		const useAxios = axios.create({
			baseURL: import.meta.env.VITE_API_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${rscAccessToken}`,
			},
		});

		const accessToken = localStorage.getItem("rscAccessToken");
		if (accessToken !== null && accessToken !== undefined) {
			useAxios.interceptors.response.use(
				(response) => {
					return response;
				}, 
				async (error) => {
					if (error.response.status === 401) {
						
						
						await refreshToken();
						const config = error.config;
						config.headers["Authorization"] = `Bearer ${accessToken}`;
						return useAxios(config);
					}
					return Promise.reject(error);
				}
			);
		}

		app.provide("useAxios", useAxios);
	},
};
