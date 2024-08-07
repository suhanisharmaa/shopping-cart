import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/Navbar.css'

const Navbar = ({count,setShow}) => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="https://wallpapers.com/images/hd/blue-nike-logo-ty9jiqeb0ooxoyf7.jpg" alt="" />
      </div>
      <div className="header">
        <h1 onClick={() => setShow(true)}>My Shop</h1>
      </div>
      <div className="cart">
        <i className="fas fa-cart-plus" onClick={() => setShow(false)}></i>
        <span>{count}</span>
      </div>
    </div>
  )
}

export default Navbar