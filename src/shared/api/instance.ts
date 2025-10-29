import axios from 'axios';

import { CONFIG } from '../model/config';

// disable cors

export const instance = axios.create({
  baseURL: CONFIG.API_BASE_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Access-Control-Allow-Origin': '*',
  },
});
