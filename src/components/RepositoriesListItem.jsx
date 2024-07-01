import React from 'react'

function RepositoriesListItem({repoData, rank}) {
  console.log(repoData);
  return (
    <li>
      { rank +  " " + repoData.name   } 
    </li>
  )
}

export default RepositoriesListItem
