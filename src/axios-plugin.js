import axios from "axios";

export default {
	install(app) {
        const authorization_code = localStorage.getItem('authorization_code');
		var useAxios = axios.create({
			baseURL: import.meta.env.VITE_API_URL,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${authorization_code}`,
			},
		});

        app.provide("useAxios", useAxios);
	},
};
