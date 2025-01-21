import { endPoint } from '@/api/endpoint';
import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;

export async function getProducts() {
  try {
    const { data } = await axios.get(`${API_URL + endPoint.products}`);
    return data;
  } catch (error) {}
}
