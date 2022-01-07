import User from '~/api/User'
import { make } from "vuex-pathify";


export const state = () => ({
  items: [],
});

export const actions = {

  async fetchUsers({ commit }) {
    try {
      let response = await User.get()
      console.info('users', response)
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
};
