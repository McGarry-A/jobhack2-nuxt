const fetchJobs = async ({ title, location, page, sort }) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data, pending, error } = await useFetch(
    "https://jobhack2.herokuapp.com/api/reed?" +
      new URLSearchParams({
        title,
        location,
        page,
        sort,
      }),
    options
  );

  return { data, pending, error };
};

export default fetchJobs;
