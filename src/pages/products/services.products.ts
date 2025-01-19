import { endPoints } from '@/api/endpoint';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  const { data } = await axios.get(`${API_URL + endPoints.products}`);
  return data;
}
