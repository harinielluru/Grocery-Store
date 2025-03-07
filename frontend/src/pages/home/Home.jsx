import React from 'react'
import Banner from './Banner'
import FreshPicks from './FreshPicks'
import DialyEssentials from './DialyEssentials'
import SnackAttacks from './SnackAttacks'
import Beverages from './Beverages'
// import Recommened from './Recommened'
import SustainabilityCorner from './SustainabilityCorner'

const Home = () => {
  return (
    <>
        <Banner/>
        <FreshPicks/>
        <DialyEssentials/>
        <SnackAttacks/>
        <Beverages/>
        <SustainabilityCorner/>
    </>
  )
}

export default Home