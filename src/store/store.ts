import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user';
import catchedWarns from './modules/catchedWarns';
import catchedErrors from './modules/catchedErrors';

const store = createStore({
  plugins: [createPersistedState({
    key: 'stateKey',
    paths: ['user', 'catchedWarns', 'catchedErrors'],
    getState(key, storage) {
      console.log('Key: ', key)
      console.log('Storage: ', storage)
    }
  })],
  modules: {
    user,
    catchedWarns,
    catchedErrors
  }
});
export default store;
