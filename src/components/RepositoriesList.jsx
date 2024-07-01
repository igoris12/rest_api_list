import React from 'react'
import RepositoriesListItem from './RepositoriesListItem'

function RepositoriesList({data}) {
  return (
    <div>
      <RepositoriesListItem repoData={data[0] } rank={data.indexOf(data[0]) + 1}/>
    </div>
  )
}

export default RepositoriesList
