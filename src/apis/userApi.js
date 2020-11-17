import apiClient from './apiClient';

class UserApi {
  postCreate(formData) {
    let url = '/users';

    return apiClient.post(url, formData);
  }

  getLeaderBoard() {
    let url = '/users/leaderBoard';

    return apiClient.get(url);
  }

  getHistory(id) {
    let url = `/users/${id}`;

    return apiClient.get(url);
  }
}

const userApi = new UserApi();
export default userApi;
