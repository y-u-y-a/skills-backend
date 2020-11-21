export const state = () => ({
  counter: 0
});

export const getters = {
  counter(state) {
    return state.counter
  }
}

export const mutations = {
  add(state) {
    state.counter += 1;
  },
  remove(state) {
    state.counter -= 1;
  }
}

export const actions = {

}
