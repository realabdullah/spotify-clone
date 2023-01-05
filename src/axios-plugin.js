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
		const tokenExpiry = localStorage.getItem("rscTokenExpiry");
		if (accessToken !== null && accessToken !== undefined) {
			useAxios.interceptors.response.use(async config => {
					if (Date.now() > tokenExpiry) {
						await refreshToken();
						const token = localStorage.getItem("rscAccessToken");
						config.headers["Authorization"] = `Bearer ${token}`;
					}
					return config;
				},
			);
		}

		app.provide("useAxios", useAxios);
	},
};
