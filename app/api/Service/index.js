import ApiClient from '~/api/Client';

const endpoint = 'v1/services';

export default {
    get() {
        return ApiClient.get(endpoint);
    },
    add(data) {
        return ApiClient.post(endpoint, data);
    },
    update(params, data) {
      return ApiClient.put(`${endpoint}/${params.id}`, data);
    },
    remove(id) {
        return ApiClient.delete(`${endpoint}/${id}`);
    },
}
