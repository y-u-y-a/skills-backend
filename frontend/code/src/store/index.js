import { Auth } from '@plugins/firebase';

export const strict = false;

export const state = () => ({
  APP_NAME: process.env.PROJECT_NAME,
});

export const getters = {
}

export const actions = {
  // middlewareより前に実行
  async nuxtClientInit ({ commit }, { req }) {
    console.log('nuxtClientInit', req.session);
  },
}
