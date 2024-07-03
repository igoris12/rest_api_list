import React from "react";
import RepositoriesListItem from "./RepositoriesListItem";

function RepositoriesList({ data }) {
  return (
    <ol className="RepositoriesList">
      <div className="header">
        <span>Rank</span>
        <span>Name</span>
        <span>Year</span>
        <span>Stars</span>
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
