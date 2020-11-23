export const state = () => ({
  APP_NAME: process.env.PROJECT_NAME,
  is_modal: false,
});

export const getters = {
  is_modal(state) {
    return state.is_modal;
  }
}

export const mutations = {
  switchModal(state, bool) {
    state.is_modal = bool;
  }
}

export const actions = {
  openModal({commit}) {
    commit('switchModal', true);
  },
  closeModal({commit}) {
    commit('switchModal', false);
  }
}
