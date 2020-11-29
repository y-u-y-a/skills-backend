export const state = () => ({
  is_preview: false,
  is_sidebar: false,
});

export const mutations = {
  resetState(state) {
    state.is_preview = false;
    state.is_sidebar = false;
  },
  togglePage(state, page_name) {
    console.log(page_name);
    console.log(state.is_preview);
    console.log(state.is_sidebar);
    if (page_name == 'preview') state.is_preview = !state.is_preview;
    if (page_name == 'sidebar') state.is_sidebar = !state.is_sidebar;
  },
}
