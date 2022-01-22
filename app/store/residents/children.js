import Children from '~/api/Resident/Children'
import { make } from "vuex-pathify";




export const state = () => ({
    items: [],
});

export const actions = {

    async fetchItems({ commit }) {
        try {
            let response = await Children.get()

            return response
        } catch (error) {
            console.error(error)
        }
    },

    async createItem({ commit }, data) {
        try {
            let response = await Children.add(data)

            return response
        } catch (error) {
            console.error(error)
        }
    },

    async updateItem({ commit }, data) {
        try {
            let response = await Children.update(data)

            return response
        } catch (error) {
            console.error(error)
        }
    },



    async removeItem({ commit }, id) {
        try {
            let response = await Children.remove(id)
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
