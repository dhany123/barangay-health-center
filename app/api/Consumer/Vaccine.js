import ApiClient from '~/api/Client';

const endpoint = '/consumer/vaccines';

export default {
  get() {
    return ApiClient.get(endpoint);
  },
  add(data) {
    return ApiClient.post(endpoint, data);
  },
  update(data) {
    return ApiClient.patch(`${endpoint}/${data.id}`, data);
  },
  remove(id) {
    return ApiClient.delete(`${endpoint}/${id}`);
  },
  find(query) {
    return ApiClient.get(`${endpoint}/${query.id}`);
  },
}


