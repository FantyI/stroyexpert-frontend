import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'

import { Route, Routes } from 'react-router'
import AboutUs from './pages/AboutUs/AboutUs'
import Reviews from './pages/Reviews/Reviews'
import Team from './pages/Team/Team'
import Feedback from './components/Feedback/Feedback'

import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AboutUs />
      <Reviews />
      <Team />
      <Feedback />
      <Footer />
    </>
  )
}

export default App
