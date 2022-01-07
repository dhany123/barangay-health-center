
export const fetch = async(params, commit) => {
  try {
    const response = _.has(params, 'data') ? await params.api.get(params.data.query) : await params.api.get()

    if(response){
      const value = _.has(params, 'data.item_key') ? response.data[params.data.item_key] : response.data.items

      console.info('items', response)

      _.has(params, 'data.commit_key') ? commit(params.data.commit_key, value) : commit('SET_ITEMS', value)

      return response
    }

    return null
    
  } catch (e) {
    console.error(e)
    return e
  }
}

export const create = async (params, commit) => {
  try {
    const response = _.has(params, 'data.query') ? await params.api.add(params.data.query, params.data.item) : await params.api.add(params.data.item)

    if(_.has(params, 'data.unset_item')){
      return response
    }

    if(response.data.success){
      const value = _.has(params, 'data.item_key') ? response.data[params.data.item_key] : response.data.item
      _.has(params, 'data.commit_key') ? commit(params.data.commit_key, value) : commit('SET_ITEM', value)
    }

    return response
    
  } catch (e) {
    console.error(e)
    return e
  }
}

export const update = async (params, commit) => {
  try {

    const response = _.has(params, 'data.query') ? await params.api.update(params.data.query, params.data.item) : await params.api.update(params.data.item)

    if(_.has(params, 'data.unset_item')){
      return response
    }

    if(response.data.success){
      const value = _.has(params, 'data.item_key') ? response.data[params.data.item_key] : response.data.items
      _.has(params, 'data.commit_key') ? commit(params.data.commit_key, value) : commit('UPDATE_ITEM', value)
    }

    return response
    
  } catch (e) {
    console.error(e)
    return e
  }
}

export const remove = async (api, id, commit) => {
  try {
    const response = await api.remove(id)

    if(response.data.success){
      commit('REMOVE_ITEM', id)
    }

    return response
    
  } catch (e) {
    console.error(e)
    return error
  }
}

export const find = async (params, commit) => {
  try {
    const response = await params.api.find(params.data.query) 

    if(_.has(params, 'data.unset_item')){
      return response
    }
    
    const value = _.has(params, 'data.item_key') ? response.data[params.data.item_key] : response.data

    _.has(params, 'data.commit_key') ? commit(params.data.commit_key, value) : commit('SET_ITEM', value)
    
    return response.data
    
  } catch (e) {
    console.error(e)
    return e
  }
}