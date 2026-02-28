import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Home/Cart/Cart'
import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
import Header from './components/navbar/Header/Header';
import FoodDisplay from './components/navbar/FoodDisplay/FoodDisplay'
import Footer from './components/navbar/Footer/Footer'


const App = () => {
  return (
<>
<div className='app'>
      <Navbar />
     
       
      <Routes>
       
        <Route path='/' element= {<Home/>} />
        <Route path='/Cart' element= {<Cart/>} />
        <Route path='/order' element= {<PlaceOrder />} />
      </Routes>
 </div>
 <Footer/>
</>
    
    
   




   
  )
}

export default App

