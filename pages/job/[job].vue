<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else>
      <h1>{{ job.jobTitle }}</h1>
      <h2>{{ job.employerName }}</h2>
      <p>{{ job.jobDescription }}</p>
      <p>
        <i>{{ job.salary }}</i>
      </p>
      <button @click="addToJobs">Add To My Jobs</button>
    </div>
  </div>
</template>

<script>
import { fetchJobDetails } from "../../utils/fetchJobDetails";
import myJobsStore from "~~/store/myJobs";

export default {
  data: function () {
    return {
      jobId: this.$route.params.job,
      job: {},
      pending: true,
    };
  },
  methods: {
    addToJobs() {
      console.log("Adding to jobs!");
      myJobsStore.commit("addToJobs", this.job);
    },
  },
  async mounted() {
    const { data, pending } = await fetchJobDetails(this.jobId);
    this.job = data.value.profile;
    this.pending = pending.value;

    console.log(this.job);
    console.log(this.pending);
  },
};
</script>

<style lang="scss" scoped>
</style>