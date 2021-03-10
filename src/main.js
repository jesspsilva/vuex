import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  // Put all the logic in store rather than in components
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, playload) {
      state.counter = state.counter + playload.value;
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
