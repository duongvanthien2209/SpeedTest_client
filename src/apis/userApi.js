import apiClient from './apiClient';
import { base_url } from '../constants';

class UserApi {
    postCreate(formData) {
        let url = `${base_url}/users`;

        return apiClient.post(url, formData);
    }

    getLeaderBoard() {
        let url = `${base_url}/users/leaderBoard`;

        return apiClient.get(url);
    }

    getHistory(id) {
        let url = `${base_url}/users/${id}`;

        return apiClient.get(url);
    }
}

const userApi = new UserApi();
export default userApi;