// import React, { useContext, useState } from 'react'
// import  './Navbar.css'
// import { assets } from '../../assets/assets'
// import { Link } from 'react-router-dom'
// import { StoreContext } from '../../Context/StoreContext'

// const Navbar = ({setShowLogin}) => {

//   const [menu,setMenu] = useState("home");
//   const {getTotalCartAmount} = useContext(StoreContext);

//   return (
//     <div className='navbar'>
//       <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
//       <ul className="navbar-menu">
//         <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>Home</Link>
//         <a href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>Menu</a>
//         <a href='#app-download' onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>Mobile app</a>
//         <a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>Contact us</a>
//       </ul>
//       <div className="navbar-right">
         
//         <Link to='/cart' className='navbar-search-icon'> 
//           <img src={assets.basket_icon} alt="" />
//           <div className={getTotalCartAmount()>0?"dot":""}></div>
//         </Link> 
//         <button onClick={()=>setShowLogin(true)}>sign in</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
// src/components/Navbar/Navbar.jsx
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, userInitial } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>

      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile App</a>
        <a href="#footer" onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>

        {userInitial ? (
          <div className="user-initial-circle">{userInitial}</div>
        ) : (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
