import MedicineReleased from '~/api/Medicine/Released'
import { make } from "vuex-pathify";


const api = MedicineReleased

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

    async updateItem({ commit }, data) {
        try {
            let response = await api.update(data)

            return response
        } catch (error) {
            console.error(error)
        }
    },



    async removeItem({ commit }, id) {
        try {
            let response = await api.remove(id)
            return response
        } catch (error) {
            console.error(error)
        }
    }

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
    REMOVE_ITEM(state, id) {
        state.items.splice(state.items.findIndex(items => items.id === id), 1);
    },
    UPDATE_ITEM(state, data) {
        state.items.splice(state.items.findIndex(items => items.id === data.id), 1, data);
    },
};
