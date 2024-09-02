import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={Home}>
        </Routes>
      </Router>

    </div>

  )
}

export default App
