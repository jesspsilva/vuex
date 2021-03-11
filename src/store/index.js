import { createStore } from 'vuex';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';
import counterModule from './counter/index.js';

const store = createStore({
  modules: {
    counter: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  // Put all the logic in store rather than in components
  // Mutations must be synchronous  
  mutations: rootMutations,
  // Actions allow to have asynchronous code
  actions: rootActions,
  getters: rootGetters
});

export default store;