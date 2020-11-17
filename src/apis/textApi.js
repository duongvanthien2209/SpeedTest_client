import apiClient from './apiClient';

class TextApi {
  getRandomText() {
    let url = '/texts';

    return apiClient.get(url);
  }
}

const textApi = new TextApi();
export default textApi;
