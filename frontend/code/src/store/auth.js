import { Auth } from '@plugins/firebase';

export const state = () => ({
  login_user: null,
});

export const mutations = {
  resetState: state => state.login_user = null,
  setLoginUser: (state, val) => state.login_user = val,
  unsetLoginUser: state => state.login_user = null,
}

export const actions = {

  async signUp({ commit }, { email, password }) {
    let res = await Auth.createUserWithEmailAndPassword(email, password);
    commit('setLoginUser', res.user);
  },

  async signIn({ commit }, { email, password }) {
    commit('common/toggleLoading', true, {root: true});
    let res = await Auth.signInWithEmailAndPassword(email, password);
    commit('setLoginUser', res.user);
    setTimeout(() => {
      commit('common/toggleLoading', false, {root: true});
      this.$router.push('/');
    }, 1000);
  },

  async signOut({ commit, dispatch }) {
    await Auth.signOut();
    dispatch('resetState', null, {root: true});
    this.$router.push('/');
  },
}
