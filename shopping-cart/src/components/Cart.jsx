import React from 'react'
import '../styles/cart.css'

const Cart = ({cart,setCart}) => {

  const handleRemove = (item) => {
    const updatedCart = cart.filter((it) => it.id !== item.id);
    setCart(updatedCart);
  }
  return (
    <div className='cartpage'>
        {
        
        cart?.map((item) => {
            console.log(item);
           return <div className="cart-in">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <h1>₹{item.price}</h1>
            <button onClick={() => handleRemove(item)}>Remove from cart</button>
            </div>
        })
        
        }
    </div>
  )
}

export default Cart