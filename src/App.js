import './App.css';
import React  from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App =()=>{
//  const apiKey = process.env.REACT_APP_API_KEY;

  const[progress,setProgress]=useState(0);
  
 
   
    return (
      <div>
          {/* <Router>
          <Routes> */}
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <News setProgress={setProgress}  pageSize={9}  country="us" category="general"/>
          {/* <Route path="/" element={<News setProgress={this.setProgress} pageSize={9} country="us" category="Bussiness"/>}>z */}
          {/* <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="Entertainment"/>
          <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="Sports"/>
          <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="Health"/>
          <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="Science"/>
          <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="Technology"/>
          <Route path="/" News setProgress={this.setProgress} pageSize={9} country="us" category="general"/> */}

  

          {/* </Routes>
          </Router> */}
      </div>
    )
  }
export default App;