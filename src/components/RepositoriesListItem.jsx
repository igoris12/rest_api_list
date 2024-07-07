import React from "react";
import { FaRegStar } from "react-icons/fa";

function RepositoriesListItem({ repoData, rank }) {
  return repoData !== undefined ? (
    <>
      <li className="RepositoriesListItem">
        <span className="rank">{rank}</span>
        <span className="title">{repoData.name}</span>
        <span className="name">{repoData.owner.login}</span>
        <span className="year">{repoData.created_at.slice(0, 4)}</span>
        <span className="stars">
          <FaRegStar />
          {repoData.stargazers_count}
        </span>
      </li>
      <div className="RepositoriesListItem info">
        <span className="name">{repoData.owner.login}</span>
        <span className="year">{repoData.created_at.slice(0, 4)}</span>
      </div>
    </>
  ) : (
    <li>lodding...</li>
  );
}

export default RepositoriesListItem;
