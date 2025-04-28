import React from 'react'
import { Banner } from './components/BannerSection/Banner'
import { Banner2 } from './components/BannerSection/Banner2'
import { Footer } from './components/FooterSection/Footer'
import { Hero } from './components/HeroSection/Hero'
import { Services } from './components/ServiceSection/Services'
import { Subscribe } from './components/SubscribeSection/Subscribe'
// import './index.css'

function App() {

  return (
    <main className='overflow-x-hidden bg-light text-dark'>
      <Hero />
      <Services />
      <Banner />
      <Subscribe />
      <Banner2 />
      <Footer />
    </main>
  )
}

export default App
