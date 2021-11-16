export default {
  state: {
    catchedErrors: []
  },
  mutations: {
    saveErrors(state, error) {
      state.catchedErrors.push(error);
      if (state.catchedErrors.length >= 5) {
        state.catchedErrors.shift();
      }
    },
  },
  actions: {},
  getters: {}
}
