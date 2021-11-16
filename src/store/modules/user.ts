export default {
  state: {
    loggedUser: {}
  },
  mutations: {
    saveUserName(state, data) {
      state.loggedUser = data;
    },
  },
  actions: {},
  getters: {}
}
