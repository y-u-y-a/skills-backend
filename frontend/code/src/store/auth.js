import axios from '@plugins/firebase';

export const state = () => ({
  login_user: null,
  email: null,
  id_token: null,
});

export const getters = {
}

export const mutations = {
  setAuthEmail(state, val) {
    state.email = val;
  },
  setIdToken(state, val) {
    state.id_token = val;
  }
}

export const actions = {
  async signUp({commit}, authData) {
    const url = `/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
    let params = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    }
    let res = await axios.post(url, params);
    commit('setAuthEmail', {email: res.data.email});
    commit('setIdToken', {id_token: res.data.idToken});
    console.log(res);
  },
  async signIn({ state, commit }, authData) {
    const url = `/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
    let params = {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    }
    let res = await axios.post(url, params);
    commit('setAuthEmail', {email: res.data.email});
    commit('setIdToken', {id_token: res.data.idToken});
    console.log(res);
    console.log(state.id_token);
  },
}
