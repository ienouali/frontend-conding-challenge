import { useState, useEffect } from "react";
import { getRepositories } from "../api/repositories/getRepositories";

export default function useRepositories(currentPage) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const { data: repositories, totalCount: count } = await getRepositories(
          currentPage
        );
        setRepos([...repositories, ...repos]);
        setTotalCount(count);
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    })();
  }, [currentPage]);

  return { repos, loading, totalCount };
}
