import ApiClient from '~/api/Client';

const endpoint = '/family_planning';

export default {
    get(data) {
        return ApiClient.get(endpoint, data);
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
    find(id) {
        return ApiClient.get(`${endpoint}/${id}`);
    },
}

