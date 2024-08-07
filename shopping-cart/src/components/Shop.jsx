import React from 'react'
import list from './list.js'
import Card from './Card.jsx'
import '../styles/shop.css'

const Shop = ({handleClick}) => {
  return (
    <>
    <div className='shop'>
       {list.map((item)=>{
        console.log(item);
        return <Card item={item} key={item.id} handleClick={handleClick}/>
       })}
    </div>
    </>
  )
}

export default Shop