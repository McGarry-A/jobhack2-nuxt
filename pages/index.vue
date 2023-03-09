<template>
  <navbar-menu></navbar-menu>
  <content-wrapper>
    <form
      @submit.prevent="
        handleSearch({
          title: this.searchQuery,
          location: this.location,
          sort: this.sort,
          page: this.page,
        })
      "
    >
      <input
        type="text"
        placeholder="Search for a role here"
        v-model="searchQuery"
      />
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
import fetchJobs from "../utils/fetchJobs";

export default {
  data() {
    return {
      jobs: {},
      searchQuery: "",
      page: "1",
      location: "Manchester",
      sort: null,
      pending: true,
    };
  },
  methods: {
    async handleSearch({ title, page, location, sort }) {
      console.log("SEARCH");
      const { data, pending, error } = await fetchJobs({
        title,
        page,
        location,
        sort,
      });

      if (!data.value || error.value) return;

      this.jobs = data.value.jobs;
      this.pending = pending.value;
    },
  },
  async created() {
    await this.handleSearch({
      title: "React",
      location: "Manchester",
      page: 1,
      sort: null,
    });
  },
};
</script>
<style lang="scss"></style>
