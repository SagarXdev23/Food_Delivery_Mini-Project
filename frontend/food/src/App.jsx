// import React from 'react'
// import Navbar from './components/navbar/navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './pages/Home/Home'
// import Cart from './pages/Home/Cart/Cart'
// import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
// import Header from './components/navbar/Header/Header';
// import FoodDisplay from './components/navbar/FoodDisplay/FoodDisplay'
// import Footer from './components/navbar/Footer/Footer'


// const App = () => {
//   return (
// <>
// <div className='app'>
//       <Navbar />
     
       
//       <Routes>
       
//         <Route path='/' element= {<Home/>} />
//         <Route path='/Cart' element= {<Cart/>} />
//         <Route path='/order' element= {<PlaceOrder />} />
//       </Routes>
//  </div>
//  <Footer/>
// </>
    
   
//   )
// }

// export default App







import React, { useState } from 'react'

import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Home/Cart/Cart'
import PlaceOrder from './pages/Home/Cart/PlaceOrder/PlaceOrder'
import Header from './components/navbar/Header/Header';
import FoodDisplay from './components/navbar/FoodDisplay/FoodDisplay'
import Footer from './components/navbar/Footer/Footer'
import LoginPopup from './components/navbar/LoginPopup/LoginPopup'


const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
<>
   {showLogin ? <LoginPopup setShowLogin={setShowLogin} />:<></>}
<div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
     
       
      <Routes>
       
        <Route path='/' element= {<Home/>} />
        <Route path='/cart' element= {<Cart/>} />
        <Route path='/order' element= {<PlaceOrder />} />
      </Routes>
 </div>
 <Footer/>
</>
    
   
  )
}

export default App