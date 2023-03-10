import { fetchJobDetails } from "../utils/fetchJobDetails.js";

export const jobDetailsMixin = {
  data: function () {
    return {
      job: {},
      pending: true,
      jobId: this.$route.params.job,
    };
  },
  methods: {
    async getJobDetails() {},
  },
  async created() {
    const { data, error, pending } = await fetchJobDetails(this.jobId);

    this.job = data.value;
    this.pending = pending.value;
  },
};
