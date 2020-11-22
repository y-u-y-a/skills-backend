export const state = () => ({
  counter: 0
});

export const getters = {
  counter(state) {
    return state.counter
  }
}

export const mutations = {
  plus(state) {
    state.counter += 1;
  },
  minus(state) {
    state.counter -= 1;
  }
}

export const actions = {

}
