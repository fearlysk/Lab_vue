// import axios from 'axios';
import router from '../../router';

export default {
  state: {
    isUserLoggedIn: false
  },
  mutations: {
    logout(state) {
      state.isUserLoggedIn = !state.isUserLoggedIn;
    }
  },
  actions: {
    logout({ commit }) {
      commit('logout');
      router.push('/');
      this.state.user.loggedUser = null;
      this.state.cartItems = [];
      this.state.cartItemCount = 0;
      setTimeout(() => window.location.reload(), 300);
    }
  },
  getters: {}
}
