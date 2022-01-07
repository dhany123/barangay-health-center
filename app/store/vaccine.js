import Vaccine from '~/api/Vaccine';
import { make } from "vuex-pathify";
import { fetch, create, update, remove } from '~/mixins/store/CrudMixinSimple'

const api = Vaccine

export const state = () => ({
  items: [],
});

export const actions = {
  fetchItems({ commit }, params = { params: { per_page: 10 } }) {
    return fetch({ api, params, commit_key: 'SET_ITEMS' }, commit)
  },
  createItem({ commit }, data) {
    return create({ api, data, commit_key: 'SET_ITEM' }, commit)
  },
  updateItem({ commit }, data) {
    return update({ api, data, commit_key: 'UPDATE_ITEM' }, commit)
  },
  deleteItem({ commit }, id) {
    return remove({ api, id, commit_key: 'REMOVE_ITEM' }, commit)
  },
  findItem({ commit }, id) {
    return remove({ api, id, commit_key: 'REMOVE_ITEM' }, commit)
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
