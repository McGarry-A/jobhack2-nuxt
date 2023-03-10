<template>
  <navbar-menu></navbar-menu>
  <content-wrapper>
    <form
      @submit.prevent="
        handleSearch({
          title: this.title,
          location: this.location,
          sort: this.sort,
          page: this.page,
        })
      "
    >
      <input type="text" placeholder="Search for a role here" v-model="title" />
      <button type="submit">Submit</button>
    </form>
    <main>
      <div v-if="pending">
        <p>Loading..</p>
      </div>
      <job-card v-else v-for="job in jobs" :job="job" :key="job.id" />
    </main>
  </content-wrapper>
</template>

<script>
import { jobListMixin } from "~~/mixins/jobList";

export default {
  mixins: [
    jobListMixin({
      title: this.title,
      page: this.page,
      location: this.location,
      sort: this.sort,
    }),
  ],
  data: function() {
    return {
      title: "React",
      page: "1",
      location: "Manchester",
      sort: null,
    };
  },
};
</script>

<style lang="scss"></style>
