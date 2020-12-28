import axios from 'axios'
import { SetAuthTokenRequest, checkTokenExpired } from '../config/interceptor'
import env from '../config/env'

const api = axios.create({
  baseURL: env.blogger + env.bloggerId
});

// api.interceptors.request.use(SetAuthTokenRequest, null);
/* api.interceptors.response.use(null, err => {
  checkTokenExpired();
  return err;
}); */

const apipath = '/posts';
const apikey = `?key=${env.bloggerApiKey}`;

export const getPosts = () => api.get(apipath + apikey);
export const getPostsByID = (params) => api.get(`${apipath}/${params + apikey}`);
