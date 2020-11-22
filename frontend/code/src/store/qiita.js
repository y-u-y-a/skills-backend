import axios from 'axios';

export const state = () => ({
  articles: []
});

export const getters = {
  articles(state) {
    return state.articles
  }
}

// stateの更新はmutationsのみ
export const mutations = {
  setArticles(state, list) {
    state.articles = list
  }
}

export const actions = {
  async getArticles({state, commit}) {
    const res = await axios.get('/api/users/yuya00/items');
    commit('setArticles', res.data);
  }
}
