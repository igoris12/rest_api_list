import React from 'react'

function RepositoriesListItem({repoData, rank}) {
  console.log(repoData);
  return (
    <li>
      {repoData.id + " " + repoData.name + ' ' + rank}
    </li>
  )
}

export default RepositoriesListItem
