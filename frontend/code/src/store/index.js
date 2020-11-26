export const strict = false

export const state = () => ({
  APP_NAME: process.env.PROJECT_NAME,
  is_preview: false,
  is_sidebar: false,
});

export const getters = {
}

export const mutations = {
  togglePage(state, {page_name}) {
    if (page_name == 'preview') state.is_preview = !state.is_preview;
    if (page_name == 'sidebar') state.is_sidebar = !state.is_sidebar;
  },
}

export const actions = {
}
