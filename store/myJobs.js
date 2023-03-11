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
      return state.myJobs.filter((job) => {
        return job.jobId === payload;
      });
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
