import React from 'react'
import UbicationBar from '../../components/categories/UbicationBar'
import SectionCategories from '../../components/categories/SectionCategories'
import FilterBar from '../../components/categories/FilterBar'
import ItemsList from '../../components/categories/ItemsList'
import Navbar from '../../components/navbar/Navbar'

const Categories = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <UbicationBar />
      <SectionCategories />
      <FilterBar />
      <ItemsList />
    </div>
  )
}

export default Categories