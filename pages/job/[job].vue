<template>
  <div>
    <h1>{{ jobId }}</h1>
  </div>
</template>

<script>
import { fetchJobDetails } from "../../utils/fetchJobDetails"
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
    this.job = data
    this.pending = pending.value

    console.log(this.job)
    console.log(this.pending)
  },
};
</script>

<style lang="scss" scoped>
</style>