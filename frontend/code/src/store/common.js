export const state = () => ({
  is_preview: false,
  is_sidebar: false,
  loading: false,
});

export const mutations = {
  resetState(state) {
    state.is_preview = false;
    state.is_sidebar = false;
    state.loading = false;
  },
  togglePage(state, page_name) {
    if (page_name == 'preview') state.is_preview = !state.is_preview;
    if (page_name == 'sidebar') state.is_sidebar = !state.is_sidebar;
  },
  toggleLoading(state) {
    state.loading = !state.loading;
  }
}
