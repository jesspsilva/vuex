import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  // This state is local, we don't have access to the isLogged in state here
  // We can get access to the global state with rootState and rootGetters

  // Ensure that there is no confusion between the names used in actions, mutations, etc in all modules of the store
  // We use the module name defined in the store to refer to this one
  namespaced: true,
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, playload) {
      state.counter = state.counter + playload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, playload) {
      context.commit('increase', playload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    }
  }
}

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
  mutations: {
    setAuth(state, playload) {
      state.isLoggedIn = playload.isAuth;
    }
  },
  // Actions allow to have asynchronous code
  actions: {
    logIn(context) {
      context.commit('setAuth', {isAuth: true});
    },
    logOut(context) {
      context.commit('setAuth', {isAuth: false});
    }
  },
  getters: {
    loggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
