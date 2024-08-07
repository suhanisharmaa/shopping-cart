import React from 'react'
import '../styles/card.css'

const Card = ({item,handleClick}) => {
  return (

        <div className="card-content">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <h1>₹{item.price}</h1>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>

  )
}

export default Card