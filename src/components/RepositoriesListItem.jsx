import React from "react";

function RepositoriesListItem({ repoData, rank }) {
  console.log(repoData);
  return repoData !== undefined ? (
    <li>{rank + " " + repoData.name + " Year: " + repoData.created_at.slice(0,4)}</li>
  ) : (
    <li>lodding...</li>
  );
}

export default RepositoriesListItem;
