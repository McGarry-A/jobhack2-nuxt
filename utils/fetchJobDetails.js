export const fetchJobDetails = async (jobId) => {
  const url = `https://jobhack2.herokuapp.com/api/reed`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { data, pending, error } = await useFetch(`${url}/${jobId}`);

  return { data, pending }
};
