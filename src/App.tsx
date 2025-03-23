// import { useState } from 'react'
import Navigation from './components/Navigation.tsx'
import Header from './components/Header.tsx'
import MainContent from './components/MainContent.tsx'
import AboutMe from './components/AboutMe.tsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <MainContent>
        <AboutMe></AboutMe>
        Main Content
      </MainContent>
    </>
  )
}

export default App
