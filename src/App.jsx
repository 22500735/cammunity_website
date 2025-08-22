import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Projects from './pages/Projects'
import CammunityProject from './pages/CammunityProject'

function App() {
  return (
    <div className="App min-h-screen bg-gradient-to-br from-accent via-accent-light to-primary/5">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cammunity" element={<CammunityProject />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
