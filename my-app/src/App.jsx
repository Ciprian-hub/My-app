import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import Work from '../pages/Work'
import Nav from '../components/Nav'

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
