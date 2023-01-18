import axios from "axios";


export const serverClient = axios.create({
  baseURL: 'https://smart-j89z.onrender.com',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${''}`
	},
});