import React from "react";

function RepositoriesListItem({ repoData, rank }) {
  console.log(repoData);
  return repoData !== undefined ? (
    <li>{`Rank: ${rank} Title: ${repoData.name}  Year: ${repoData.created_at.slice(0,4)} Author: ${repoData.owner.login}`}</li>
  ) : (
    <li>lodding...</li>
  );
}

export default RepositoriesListItem;
