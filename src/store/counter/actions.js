export default {
  increment(context) {
    setTimeout(function() {
      context.commit('increment');
    }, 2000);
  },
  increase(context, playload) {
    context.commit('increase', playload);
  }
};