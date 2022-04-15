import Immunization from '~/api/Immunization'
import { make } from "vuex-pathify";


export const state = () => ({
    items: [],
});

let api = Immunization
export const actions = {

    async fetchItems({ commit }) {
        try {
            let response = await api.get()
            console.info('residents', response)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async createItem({ commit }, data) {
        try {
            let response = await api.add(data)
            console.info('residents', response)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async updateItem({ commit }, data) {
        try {
            let response = await api.update(data)
            console.info('residents', response)
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
