import axios from "axios";

export default {
	install(app) {
        const rscAccessToken = localStorage.getItem('rscAccessToken');
		var useAxios = axios.create({
			baseURL: import.meta.env.VITE_API_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${rscAccessToken}`,
			},
		});

        app.provide("useAxios", useAxios);
	},
};
