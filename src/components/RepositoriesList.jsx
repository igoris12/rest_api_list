import React from "react";
import RepositoriesListItem from "./RepositoriesListItem";

function RepositoriesList({ data }) {
  console.log(data);
  return (
    <ol className="RepositoriesList">
      <div className="header">
        <span className="rank">Rank</span>
        <span className="title">Title</span>
        <span className="name">Name</span>
        <span className="year">Year</span>
        <span className="stars">Stars</span>
      </div>

      {data.map((project) => (
        <RepositoriesListItem
          repoData={project}
          key={project.id}
          rank={data.indexOf(project) + 1}
        />
      ))}
    </ol>
  );
}

export default RepositoriesList;
