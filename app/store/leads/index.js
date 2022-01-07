import Lead from '~/api/Lead'
import { make } from "vuex-pathify";


export const state = () => ({
  items: [],
});

export const actions = {

  async fetchLeads({ commit }) {
    try {
      let response = await Lead.get()
      console.info('leads', response)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async createLead({ commit }, data) {
    try {
      let response = await Lead.add(data)
      console.info('leads', response)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async updateLead({ commit }, data) {
    try {
      let response = await Lead.update(data)
      console.info('leads', response)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async fetchSellerLeads({ commit }, id) {
    try {
      let response = await Lead.getSellerLeads(id)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async fetchSellerLeadExist({ commit }, params) {
    try {
      let response = await Lead.getSellerLeadExist(params)
      return response
    } catch (error) {
      console.error(error)
    }
  },

  async removeLead({ commit }, id) {
    try {
      let response = await Lead.remove(id)
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
