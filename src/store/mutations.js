export default {
  setAuth(state, playload) {
    state.isLoggedIn = playload.isAuth;
  }
};