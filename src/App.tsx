// import { useState } from 'react'
import Navigation from './components/Navigation.tsx'
import Header from './components/Header.tsx'
import MainContent from './components/MainContent.tsx'
import './App.css'

function App() {
  

  return (
    <>
      <Navigation></Navigation>
      <Header></Header>
      <MainContent>Main Content</MainContent>
    </>
  )
}

export default App
