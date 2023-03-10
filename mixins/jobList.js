import fetchJobs from "../utils/fetchJobs";

export const jobListMixin = ({ title, page, location, sort }) => {
  return {
    data: function() {
      return {
        jobs: {},
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
      console.log("CREATED");
      await this.handleSearch({
        title: "React",
        location: "Manchester",
        page: 1,
        sort: null,
      });
    },
  };
};
