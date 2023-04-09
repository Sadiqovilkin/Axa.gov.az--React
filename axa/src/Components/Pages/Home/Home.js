import React from 'react'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Map from './Map/Map'
import News from './News/News'
import Slider from './Slider/Slider'
import Information from './Information/Information'

const Home = () => {
  return (
  <main>
    <Banner/>
    <Slider/>
    <News/>
    <Information/>
    <Map/>
    <Contact/>
  </main>
  )
}

export default Home