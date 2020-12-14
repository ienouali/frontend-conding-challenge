import React, { useState } from "react";
import useRepositories from "../../hooks/useRepositories";
import CardRepository from "../CardRepository/CardRepository";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Repositories() {
  const [currentPage, setCurrentPage] = useState(1);
  const { repos, loading, totalCount } = useRepositories(currentPage);

  return (
    <>
      <h1 className="bg-white p-4 shadow-sm text-center font-weight-normal">
        Github repositories
      </h1>
      <hr />
      <InfiniteScroll
        dataLength={repos.length}
        next={() => setCurrentPage(currentPage + 1)}
        hasMore={repos.length < totalCount}
        scrollableTarget="scrollableDiv"
      >
        <CardRepository data={repos} loader={loading} />
      </InfiniteScroll>
    </>
  );
}
