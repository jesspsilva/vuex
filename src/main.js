import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  // Put all the logic in store rather than in components
  // Mutations must be synchronous  
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, playload) {
      state.counter = state.counter + playload.value;
    },
    setAuth(state, playload) {
      state.isLoggedIn = playload.isAuth;
    }
  },
  // Actions allow to have asynchronous code
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, playload) {
      context.commit('increase', playload);
    },
    logIn(context) {
      context.commit('setAuth', {isAuth: true});
    },
    logOut(context) {
      context.commit('setAuth', {isAuth: false});
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    loggedIn(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
