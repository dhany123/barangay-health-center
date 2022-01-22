import ApiClient from '~/api/Client';

const endpoint = '/medicine_released';

export default {
    get(data) {
        return ApiClient.get(endpoint, data);
    },
    add(data) {
        return ApiClient.post(endpoint, data);
    }
}


