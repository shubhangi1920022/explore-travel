import React from 'react'
import './style.css'
import Home from './routes/Home';
import {Routes,Route} from 'react-router-dom'
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

    </div>
  );
}

export default App;
