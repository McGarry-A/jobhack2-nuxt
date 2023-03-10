import fetchJobs from "../utils/fetchJobs";

export const jobListMixin = {
  data: function () {
    return {
      jobs: {},
      pending: true,
      page: "1",
      location: "Manchester",
      sort: null,
      title: "React",
    };
  },
  methods: {
    async handleSearch({ title, page, location, sort }) {
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
