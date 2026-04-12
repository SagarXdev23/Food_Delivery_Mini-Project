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


import React, { useState, useContext } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu")
    const { token, setToken } = useContext(StoreContext)

    const navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

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
            {!token ? <button onClick={()=>setShowLogin(true)}>sign in</button>
            :<div className ='navbar-profile'>
                <img src={assets.profile_icon} alt="Profile" />
                <ul className="navbar-profile-dropdown">
                    <li> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
                        <hr />
                    <li onClick={Logout}><img src={assets.logout_icon} alt="" /> <p>Logout</p></li>
                    </ul>                
            </div>
            
            }
        </div>
    </div>
  )
}

export default navbar
