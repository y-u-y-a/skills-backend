import { axiosAuth, axiosRefresh } from '@plugins/firebase';

export const state = () => ({
  login_user: null,
  email: null,
  id_token: null,
});

export const getters = {
  id_token: state => state.id_token
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

  async signUp({ commit }, authData) {
    const url = `/accounts:signUp?key=${process.env.FIREBASE_API_KEY}`;
    let res = await axiosAuth.post(url, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    });
    console.log(res);
    commit('setAuthEmail', {email: res.data.email});
    commit('setIdToken', {id_token: res.data.idToken});
  },

  async signIn({ commit, dispatch }, authData) {
    const url = `/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`;
    let res = await axiosAuth.post(url, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true,
    });
    console.log(res);
    commit('setAuthEmail', {email: res.data.email});
    commit('setIdToken', {id_token: res.data.idToken});
    localStorage.setItem('idToken', res.data.idToken); // ログインの永続化
    dispatch('updateIdToken', res.data.refreshToken); // IDトークン更新
  },

  // Update id_token with refresh_token
  updateIdToken({ commit, dispatch }, refresh_token) {
    let interval = 2000;
    let url = `/token?key=${process.env.FIREBASE_API_KEY}`;
    setTimeout( () => {
      axiosRefresh.post(url, {
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
      })
      .then((res) => {
        // Set returned id_token on local storage
        commit('setIdToken', res.data.id_token);
        setTimeout( () => { // 再帰処理
          dispatch('updateIdToken', res.data.refresh_token);
        }, interval);
      });
    }, interval);
  }
}
