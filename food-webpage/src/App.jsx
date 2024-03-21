import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Banner from './components/Banner/Banner'
import WhyUs from './components/WhyChooseUs/WhyUs'
import About from './components/AboutUs/About'
import Footer from './components/Footer/Footer'
import Showpopup from './components/Showpopup/Showpopup'

import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  const [showPopUp, setShowPopUp] = useState(false)

  const handlePop = () => setShowPopUp(true)

  useEffect(() => {
    AOS.init({
      offset : 100,
      duration : 800,
      easing : 'ease-in-sine',
      delay : 100,
    });
    AOS.refresh()
  } ,[])

  return (
    <>
      <Navbar handlePop={handlePop}/>
      <Hero />
      <Banner />
      <WhyUs />
      <About handlePop={handlePop}/>
      <Banner />
      <Footer />
      <Showpopup showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
    </>
  )
}

export default App
