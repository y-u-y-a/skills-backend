import axios from 'axios';

export const state = () => ({
  project_name: null,
  position: null,
  member_counts: null,
  industry_type: null,
  process: [],
  detail: null,
  period: {
    start: null,
    end: null
  },
  os: ['Mac', 'windows', 'Linux', 'Ubuntu', 'CentOS7'],
  db: ['MySQL', 'PostgresQL', 'NoSQL', 'oracle'],
  lang: ['Python', 'JavaScript', 'Go'],
  fw: ['Vue.js', 'Laravel', 'Django', 'Docker'],
  tool: ['Slack', 'ChatWork', 'Asana'],
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
  setPeriod(state, {start=null, end=null}) {
    console.log(start, end)
    if(start) state.period.start = start;
    if(end) state.period.end = end;
  },
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
  setDev(state, {os=null, db=null, lang=null, fw=null, tool=null}) {
    if(os) state.os.push(os);
    if(db) state.db.push(db);
    if(lang) state.lang.push(lang);
    if(fw) state.fw.push(fw);
    if(tool) state.tool.push(tool);
  },
  unsetDev(state, {os=null, db=null, lang=null, fw=null, tool=null}) {
    if(os) {
      let index = state.os.indexOf(os);
      if (index > -1) state.os.splice(index, 1);
    }
    if(db) {
      let index = state.db.indexOf(db);
      if (index > -1) state.db.splice(index, 1);
    }
    if(lang) {
      let index = state.lang.indexOf(lang);
      if (index > -1) state.lang.splice(index, 1);
    }
    if(fw) {
      let index = state.fw.indexOf(fw);
      if (index > -1) state.fw.splice(index, 1);
    }
    if(tool) {
      let index = state.tool.indexOf(tool);
      if (index > -1) state.tool.splice(index, 1);
    }
  },
}

export const actions = {
  insertProject({commit}, {data}) {
    console.log(data);
  }
}
