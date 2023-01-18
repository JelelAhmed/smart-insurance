import axios from "axios";


export const serverClient = axios.create({
  baseURL: 'http://localhost:3002',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${''}`
	},
});