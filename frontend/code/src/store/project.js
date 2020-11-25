import axios from 'axios';

export const state = () => ({
  title: null,
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
  setTitle: (state, val) => state.title = val,
  setPosition: (state, val) => state.position = val ,
  setMemberCounts: (state, val) => state.member_counts = val,
  setIndustryType: (state, val) => state.industry_type = val,
  // Period
  setPeriod(state, {start=null, end=null}) {
    if(start) state.period.start = start;
    if(end) state.period.end = end;
  },
  // Work
  setProcess: (state, vals) => state.process = vals,
  setDetail: (state, val) => state.detail = val,
  // Develop
  setOS: (state, val) => state.os.push(val),
  setDB: (state, val) => state.db.push(val),
  setLang: (state, val) => state.lang.push(val),
  setFW: (state, val) => state.fw.push(val),
  setTool: (state, val) => state.tool.push(val),

  unsetOS:(state, val) => {
    let i = state.os.indexOf(val);
    if (i > -1) state.os.splice(i, 1);
  },
  unsetDB:(state, val) => {
    let i = state.db.indexOf(val);
    if (i > -1) state.db.splice(i, 1);
  },
  unsetLang:(state, val) => {
    let i = state.lang.indexOf(val);
    if (i > -1) state.lang.splice(i, 1);
  },
  unsetFW:(state, val) => {
    let i = state.fw.indexOf(val);
    if (i > -1) state.fw.splice(i, 1);
  },
  unsetTool:(state, val) => {
    let i = state.tool.indexOf(val);
    if (i > -1) state.tool.splice(i, 1);
  },
}

export const actions = {
  insertProject({commit}, {data}) {
    console.log(data);
  }
}
