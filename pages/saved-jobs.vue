<template>
  <figure v-for="job in myJobs" :key="job.id">
    <p>{{ job.jobTitle }}</p>
    <p>{{ job.jobId }}</p>
    <button @click="deleteFromList(job.jobId)">Delete From List</button>
  </figure>
</template>

<script>
import myJobsStore from "../store/myJobs";
export default {
  data: () => ({
    myJobs: [],
  }),
  mounted() {
    this.myJobs = myJobsStore.getters.getMyJobs;
    console.log("MYJOBS", this.myJobs);
  },
  methods: {
    deleteFromList(id) {
      myJobsStore.commit("removeFromJobs", id);
    },
  },
};
</script>