import AddStock from '~/api/Medicine/Add'
import { make } from "vuex-pathify";


const api = AddStock

export const state = () => ({
    items: [],
});

export const actions = {

    async fetchItems({ commit }) {
        try {
            let response = await api.get()

            return response
        } catch (error) {
            console.error(error)
        }
    },

    async createItem({ commit }, data) {
        try {
            let response = await api.add(data)

            return response
        } catch (error) {
            console.error(error)
        }
    },


}

export const getters = {
    ...make.getters(state),
}

export const mutations = {
    ...make.mutations(state),

    SET_ITEMS(state, data) {
        state.items = data;
    },
    SET_ITEM(state, data) {
        state.items.push(data);
    },

};
