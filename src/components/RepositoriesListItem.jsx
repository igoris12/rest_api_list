import React from "react";

function RepositoriesListItem({ repoData, rank }) {
  console.log(repoData);
  return repoData !== undefined ? (
    <li className="RepositoriesListItem">
      <span className="rank">{rank}</span> 
      <span className="title">{repoData.name}</span>
      <span className="name">{repoData.owner.login}</span>
      <span className="year">{repoData.created_at.slice(0, 4)}</span>
      <span className="stars">{repoData.stargazers_count}</span>
    </li>
  ) : (
    <li>lodding...</li>
  );
}

export default RepositoriesListItem;
