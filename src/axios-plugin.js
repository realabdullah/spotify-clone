import axios from "axios";

export default {
	install(app) {
		app.config.globalProperties.$axios = axios.create({
			baseURL: import.meta.env.VITE_API_URL,
			headers: {
				"Content- Type": "application/json",
				Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
			},
		});
	},
};
