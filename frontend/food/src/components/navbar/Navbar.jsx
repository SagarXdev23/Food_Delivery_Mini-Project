// import React, { useState } from 'react'
// import './navbar.css'
// import { assets } from '../../assets/assets'

// const navbar = () => {

//     const [menu, setMenu] = useState("menu")
//   return (
//     <div className="navbar">
//         <img src={assets.logo} alt="" className="logo" />
//         <ul className="navbar-menu">
//             <li onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</li>
//             <li onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</li>
//             <li onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"? "active":""}>mobile-app</li>
//             <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"? "active":""}>contact us</li>
//         </ul>
//         <div className="navbar-right">
//             <img src={assets.search_icon } alt="" />
//             <div className="navbar-search-icon">
//                 <img src={assets.basket_icon} alt="" />
//                 <div className="dot"></div>
//             </div>
//             <button>sign in</button>
//         </div>
//     </div>
//   )
// }

// export default navbar








import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu")
  return (
    <div className="navbar">
       <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>menu</a>
            <a href='#app-download' onClick={()=>setMenu("mobile-app")}  className={menu==="mobile-app"? "active":""}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("contact-us")}className={menu==="contact-us"? "active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon } alt="" />
            <div className="navbar-search-icon">
               <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default navbar
