import Resident from '~/api/Resident'
import { make } from "vuex-pathify";


export const state = () => ({
    items: [],
});

export const actions = {

    async fetchItems({ commit }) {
        try {
            let response = await Resident.get()
            console.info('subjects', response)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async createItem({ commit }, data) {
        try {
            let response = await Resident.add(data)
            console.info('subjects', response)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async updateItem({ commit }, data) {
        try {
            let response = await Resident.update(data)
            console.info('subjects', response)
            return response
        } catch (error) {
            console.error(error)
        }
    },



    async removeItem({ commit }, id) {
        try {
            let response = await Resident.remove(id)
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
