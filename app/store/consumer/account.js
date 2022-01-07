import Account from '~/api/Consumer/Account';
import { make } from "vuex-pathify";
import { fetch, create, update, remove, find } from '~/mixins/store/CrudMixin'

const api = Account

export const state = () => ({
  items: [],
});

export const actions = {
  fetchItems({commit}){
    return fetch({api}, commit)
  },
  createItem({ commit }, data){
    return create({ api, data}, commit)
  },
  updateItem({ commit }, data){
    return update(api, data, commit)
  },
  deleteItem({ commit }, id){
    return remove(id, commit)
  },
  findItem({commit}, id){
    return find(api, id, false, commit)
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
