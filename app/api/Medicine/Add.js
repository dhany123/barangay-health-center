import ApiClient from '~/api/Client';

const endpoint = '/add_medicine';

export default {
    get(data) {
        return ApiClient.get(endpoint, data);
    },
    add(data) {
        return ApiClient.post(endpoint, data);
    }
}


