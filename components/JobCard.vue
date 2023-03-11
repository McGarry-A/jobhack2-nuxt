<template>
  <NuxtLink :to="linkTo">
    <article class="JobCard-Container">
      <h3>{{ job.title }}</h3>
      <p>{{ job.company }}</p>
      <p>{{ job.description }}</p>
    </article>
  </NuxtLink>
</template>

<script>
import myJobsStore from "~~/store/myJobs";

export default {
  props: {
    job: {
      title: String,
      description: String,
      company: String,
      id: String,
    },
  },
  computed: {
    linkTo() {
      return `/job/${this.job.id}`;
    },
  },
};
</script>

<style lang="scss">
.JobCard-Container {
  margin: 1rem 0;
  border: 1px solid #f5f5f5;
  padding: 0.4rem 0.8rem;
}
</style>