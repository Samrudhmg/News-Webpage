import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import News from './Components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



export default class App extends Component {
  pagesize=15;
  render() {
    return (
      <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<News pagesize={this.pagesize} country='us' category='general'/>}/>
          <Route exact path='/business' element={<News key='/business'  pagesize={this.pagesize} country='us' category='business'/>}/>
          <Route path='/sports' element={<News key='/sports' pagesize={this.pagesize} country='us' category='sports'/>}/>
          <Route path='/technology' element={<News key='/technology' pagesize={this.pagesize} country='us' category='technology'/>}/>
          <Route path='/science' element={<News key='/science' pagesize={this.pagesize} country='us' category='science'/>}/>
          <Route path='/health' element={<News key='/health' pagesize={this.pagesize} country='us' category='health'/>}/>
          <Route path='/entertainment' element={<News key='/entertainmnet' pagesize={this.pagesize} country='us' category='entertainment'/>}/>
        
        
        </Routes>
      </div>
      </Router>
    )
  }
}

