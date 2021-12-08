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
    // async login() {
    //   const result = await axios.get(
    //     `http://localhost:3000/users?email=${this.email}&password=${this.password}`
    //   )
    //   if (result.status === 200 && result.data.length > 0) {
    //     // localStorage.setItem(userInfo as any, JSON.stringify(result.data[0]));
    //     // this.$router.go()
    //     this.state.loggedUser = JSON.stringify(result.data[0]);
    //     window.location.reload();
    //   }
    // },
    logout({ commit }) {
      commit('logout');
      this.state.user.loggedUser = {};
      router.push('/');
      setTimeout(() => window.location.reload(), 100);
    }
  },
  getters: {}
}
