import { createStore } from "vuex";

const myJobsStore = createStore({
  state() {
    return {
      myJobs: [],
    };
  },
  mutations: {
    // used for sync code -- same as reducer
    addToJobs(state, payload) {
      state.myJobs.push(payload);
      console.log(state);
    },
    removeFromJobs(state, payload) {
      const index = state.myJobs.map(({ jobId }) => jobId).indexOf(payload)
      state.myJobs.splice(index, 1)
    },
  },
  actions: {
    // used for async -- same as async thuunk
    addToJobs() {},
    removeFromJobs() {},
  },
  getters: {
    // can get variations in the state without actually changing the state
    getMyJobs: (state) => state.myJobs,
  },
});

export default myJobsStore;
