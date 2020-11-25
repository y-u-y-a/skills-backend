import axios from 'axios';

export const state = () => ({
  project_name: null,
  position: null,
  member_counts: null,
  industry_type: null,
  process: [],
  detail: null,
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
    console.log(val)
    state.position = val
  },
  setMemberCounts(state, val) {
    console.log(val)
    state.member_counts = val
  },
  setIndustryType(state, val) {
    console.log(val)
    state.industry_type = val
  },
  // Period
  // Work
  setProcess(state, vals) {
    console.log(vals)
    state.process = vals
  },
  setDetail(state, val) {
    console.log(val)
    state.detail = val
  },
  // Develop
}

export const actions = {
  sample({commit}, {project}) {
    console.log(project);
  }
}
