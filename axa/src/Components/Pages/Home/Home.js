import React from 'react'
import Banner from './Banner/Banner'
import Contact from './Contact/Contact'
import Map from './Map/Map'
import News from './News/News'
import Slider from './Slider/Slider'

const Home = () => {
  return (
  <main>
    <Banner/>
    <Slider/>
    <News/>
    <Map/>
    <Contact/>
  </main>
  )
}

export default Home