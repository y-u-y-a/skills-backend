import axios from 'axios';

export const state = () => ({
  project_name: null,
  position: null,
  member_counts: null,
  industry_type: null,
});

export const getters = {
}

export const mutations = {
  // About
  setProjectName(state, val) {
    console.log(val)
    state.project_name = val
  },
  setPosition(state, val) {
    state.position = val
  },
  setmemberCounts(state, val) {
    state.member_counts = val
  },
  setIndustryType(state, val) {
    state.industry_type = val
  },
  // Period
  // Work
  // Develop
}

export const actions = {
  sample({commit}, {project}) {
    console.log(project);
  }
}
