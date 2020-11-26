import axios from 'axios';

export const state = () => ({
  profile: {
    last_name: null,
    first_name: null,
    last_name_kana: null,
    first_name_kana: null,
    gender: null,
    birth: {
      year: null,
      month: null,
      day: null
    },
    email: null,
    phone_number: null,
    station: null,
    pr_text: null
  }
});

export const getters = {
}

export const mutations = {
}

export const actions = {
  insertProfile({commit}, {profile}) {
    console.log(profile);
    // location.href = '/';
  }
}
