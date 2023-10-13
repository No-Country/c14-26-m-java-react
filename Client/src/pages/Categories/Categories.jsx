import React from 'react'
import UbicationBar from '../../components/categories/UbicationBar'
import SectionCategories from '../../components/categories/SectionCategories'
import FilterBar from '../../components/categories/FilterBar'
import ItemsList from '../../components/categories/ItemsList'

const Categories = () => {
  return (
    <div className='flex flex-col items-center'>
      <UbicationBar/>
      <SectionCategories/>
      <FilterBar/>
      <ItemsList/>

    </div>
  )
}

export default Categories