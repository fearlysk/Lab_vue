export default {
  state: {
    catchedWarns: []
  },
  mutations: {
    saveWarns(state, warn) {
      state.catchedWarns.push(warn);
      if (state.catchedWarns.length >= 5) {
        state.catchedWarns.shift();
      }
    },
  },
  actions: {},
  getters: {}
}
