export const state = () => ({
  APP_NAME: process.env.PROJECT_NAME,
  is_preview: false,
  is_sidebar: false
});

export const getters = {
  is_preview(state) {
    return state.is_preview;
  },
  is_sidebar(state) {
    return state.is_sidebar;
  }
}

export const mutations = {
  switchPage(state, {bool, page_name}) {
    if (page_name == 'preview') state.is_preview = bool;
    if (page_name == 'sidebar') state.is_sidebar = bool;
  },
}

export const actions = {
  showPage({commit}, {page_name}) {
    commit('switchPage', {bool: true, page_name: page_name});
  },
  hiddenPage({commit}, {page_name}) {
    commit('switchPage', {bool: false, page_name: page_name});
  }
}
