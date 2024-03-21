import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyUs from './components/WhyChooseUs/WhyUs'
import About from './components/AboutUs/About'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <WhyUs />
      <About />
      <Banner />
      <Footer />
    </>
  )
}

export default App
