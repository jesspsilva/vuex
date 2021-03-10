<template>
  <button @click="logIn" v-if="!loggedIn">Login</button>
  <button @click="logOut" v-else>Logout</button>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['logIn', 'logOut'])
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
}

</script>
