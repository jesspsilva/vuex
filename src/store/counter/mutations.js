export default {
  increment(state) {
    state.counter++;
  },
  increase(state, playload) {
    state.counter = state.counter + playload.value;
  }
};