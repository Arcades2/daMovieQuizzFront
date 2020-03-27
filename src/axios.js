import axios from 'axios';
import { API_URI } from './constants';

const iaxios = axios.create({
  baseURL: API_URI,
});

export default iaxios;
