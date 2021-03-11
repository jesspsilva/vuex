import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
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
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
}