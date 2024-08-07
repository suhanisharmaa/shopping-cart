import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from './components/Cart';

function App() {

  const [cart,setCart] = useState([]);
  const [show,setShow] = useState(true);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((i) => {
      if(i.id === item.id)
        isPresent = true
    })
    if(isPresent===true){
      alert("Item already exists in cart",2000);
    }
    else setCart([...cart,item]);
  }

  return (
    <div className="app">
      <Navbar count={cart.length} setShow={setShow}/>
      {
        show ? <Shop handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart}/>
      }
      
    </div>
  );
}

export default App;
