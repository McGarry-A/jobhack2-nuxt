import { createStore } from "vuex";

const myJobs = createStore({
  state() {
    return {
      myJobs: [],
    };
  },
  mutations: {
    addToJobs() {},
    removeFromJobs() {},
  },
  actions: {
    addToJobs() {},
    removeFromJobs() {},
  },
});

export default myJobs;
