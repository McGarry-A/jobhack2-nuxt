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
    </div>
  </div>
</template>

<script>
import { fetchJobDetails } from "../../utils/fetchJobDetails";
export default {
  data: function () {
    return {
      jobId: this.$route.params.job,
      job: {},
      pending: true,
    };
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