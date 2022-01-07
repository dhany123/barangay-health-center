import ServiceCategory from '~/api/ServiceCategory'
import { make } from "vuex-pathify";
import { fetch, create, update, remove } from '~/mixins/store/CrudMixinSimple'


export const state = () => ({
    items: [],
});

export const actions = {
  async fetchServiceCategories({ commit }) {
    try {
      let response = await ServiceCategory.get()
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async addServiceCategories({ commit }, data) {
    try {
      let response = await ServiceCategory.add(data)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async updateServiceCategories({ commit }, data) {
    try {
      let response = await ServiceCategory.update({id: data.id}, data)
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
    REMOVE_ITEM(state, id) {
        state.items.splice(state.items.findIndex(items => items.id === id), 1);
    },
    UPDATE_ITEM(state, data) {
        state.items.splice(state.items.findIndex(items => items.id === data.id), 1, data);
    },
};
