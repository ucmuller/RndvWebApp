import types from '../mutation-types';

const state = {
  referralData: null,
}

const mutations = {
  [types.REFERRALDATA](state, data) {
    state.referralData = data;
  }
}

const getters = {
  referralData(state) {
    return state.referralData
  }

}

const actions = {
  referralData({commit}, data){
    commit(types.REFERRALDATA, data)
  }

}


export default {
  state,
  mutations,
  getters,
  actions
};