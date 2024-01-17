import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes, // Use Routes instead of Switch
} from "react-router-dom";
import React, {useState} from 'react'
function App() {
  const [mode, setmode] = useState('light')
   
  const togglemode=()=>{
     
    if(mode==='light'){
      console.log("clicked")
      setmode('dark')
      document.body.style.backgroundColor='grey'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <Router>
      <div className="App">
        <Navbar title='textUtils' mode={mode} togglemode={togglemode} />
        <div className='container'>
          <Routes> {/* Use Routes */}
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<Textform />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
