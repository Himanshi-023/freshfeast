import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import MobileApp from './pages/MobileApp';
import Cart from './pages/Cart';
import Header from './component/Header';
import Footer from './component/Footer';
import LoginPop from './component/LoginPop';
import PlaceOrder from  './pages/PlaceOrder'


const App = () => {
  const[showlogin,setShowlogin]=useState(false);
  
  return (
    <div  className='overflow-hidden'>
      <Router>
      {showlogin?<LoginPop   setShowlogin={setShowlogin}/>:<></>}
      <Header  setShowlogin={setShowlogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/mobileapp' element={<MobileApp />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
