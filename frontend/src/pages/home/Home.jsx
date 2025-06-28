import React from 'react'
import Banner from './Banner'
import FreshPicks from './FreshPicks'
import DialyEssentials from './DialyEssentials'
import SnackAttacks from './SnackAttacks'
import Beverages from './Beverages'
import SustainabilityCorner from './SustainabilityCorner'
import ProductList from '../../components/ProductList'

const Home = () => {
  return (
    <>
      <Banner />
      <FreshPicks />
      <DialyEssentials />
      <SnackAttacks />
      <Beverages />

      {/* 🔽 Show all products here */}
      <div className="my-8 px-4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <ProductList />
      </div>

      <SustainabilityCorner />
    </>
  )
}

export default Home
