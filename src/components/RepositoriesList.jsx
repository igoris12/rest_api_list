import React from "react";
import RepositoriesListItem from "./RepositoriesListItem";

function RepositoriesList({ data }) {
  return (
    <ol className="RepositoriesList">
      <div className="header">
        <span className="rank">Rank</span>
        <span className="title">Title</span>

        <span className="name">Name</span>
        <span className="year">Year</span>
        <span className="stars">Stars</span>
      </div>
      <RepositoriesListItem
        repoData={data[0]}
        rank={data.indexOf(data[0]) + 1}
      />
      <RepositoriesListItem
        repoData={data[0]}
        rank={data.indexOf(data[0]) + 1}
      />
      <RepositoriesListItem
        repoData={data[0]}
        rank={data.indexOf(data[0]) + 1}
      />
    </ol>
  );
}

export default RepositoriesList;
