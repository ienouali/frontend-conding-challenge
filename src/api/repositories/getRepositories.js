import API from "../axios";

const getRepositories = async (currentPage) => {
  try {
    const URL = `search/repositories?q=created:>2017-11-22&sort=stars&order=desc&page=${currentPage}`;
    const response = await API.get(URL);
    const { data } = response;
    return {data : data.items, totalCount : data.total_count};
  } catch (err) {
    throw new Error();
  }
};

export { getRepositories };
