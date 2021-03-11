<template>
  <base-container title="Vuex" v-if="loggedIn">
    <the-counter></the-counter>
    <button @click="increment">Add 1</button>
    <button @click="increase({value: 10})">Add 10</button>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth
  },
  methods: {
    ...mapActions('counter', ['increment', 'increase'])
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>