import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation.tsx'
import Header from './components/Header.tsx'
import About from './pages/About.tsx'
import MainContent from './components/MainContent.tsx'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Navigation />
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/works" element={ <h1 style={{  color: "black" }}>Works</h1> }/>
          <Route path="/contact" element={ <h1 style={{ color: "black"}}>Contact</h1> }/>
        </Routes>
      </MainContent>
    </BrowserRouter>
  )
}

export default App
