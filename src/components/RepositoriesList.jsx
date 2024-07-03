import React from 'react'
import RepositoriesListItem from './RepositoriesListItem'

function RepositoriesList({data}) {
  return (
    <section className='RepositoriesList'>
      <RepositoriesListItem repoData={data[0] } rank={data.indexOf(data[0]) + 1}/>
    </section>
  )
}

export default RepositoriesList
