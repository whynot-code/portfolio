// import { useState } from 'react'
import Navigation from './components/Navigation.tsx'
import Header from './components/Header.tsx'
import MainContent from './components/MainContent.tsx'
import AboutMe from './components/AboutMe.tsx'
import MyServices from './components/MyServices.tsx'
import Pricing from './components/Pricing.tsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navigation />
      <Header />
      <MainContent>
        <AboutMe />
        <MyServices />
        <Pricing />
        Main Content
      </MainContent>
    </>
  )
}

export default App
