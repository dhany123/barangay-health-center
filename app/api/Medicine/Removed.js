import ApiClient from '~/api/Client';

const endpoint = '/removed_medicine';

export default {
    get(data) {
        return ApiClient.get(endpoint, data);
    },
    add(data) {
        return ApiClient.post(endpoint, data);
    }
}


