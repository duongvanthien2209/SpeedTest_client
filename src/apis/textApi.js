import apiClient from './apiClient';
import { base_url } from '../constants';

class TextApi {
  getRandomText() {
    let url = `${base_url}/texts`;

    return apiClient.get(url);
  }
}

const textApi = new TextApi();
export default textApi;
