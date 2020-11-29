export const strict = false;

export const state = () => ({
  APP_NAME: process.env.PROJECT_NAME,
});

export const actions = {
  resetState({ commit }) {
    commit('common/resetState');
    commit('auth/resetState');
  },
}
