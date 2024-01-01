import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext'
import CartProduct from './CartProduct'
const CartProductList = () => {
  const {cartProducts}=useContext(DataContext)
  const [totalItems,setTotalItems]=useState(null)
  const [totalPrice,setTotalPrice]=useState(null)
  useEffect(()=>{
   setTotalItems(null)
   setTotalPrice(null)
  },[cartProducts])
  const handleCheckout = () => {
    let totalNumberOfProducts = cartProducts.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(totalNumberOfProducts);
  
    let totalPriceCalculation = cartProducts.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPriceCalculation);
  }
  
  return (
    <div style={{margin:'20px'}}>
        <h1 style={{textAlign:'center'}}>Cart</h1>
   {!cartProducts.length&&(<p className='emptycart'>Your cart is empty</p>)}

  
         <div style={{display:'flex',justifyContent:'center',alignItems:'center', flexWrap:'wrap'}}>
        {cartProducts.map(product=>(
            
          <CartProduct key={product.id} product={product}/>
         
            )
            )}
               </div>
             {(cartProducts.length>0)&&<button className='checkoutBtn' onClick={handleCheckout}>Checkout</button>}
             {totalPrice&&totalItems&&(
             
             <div className='checkoutdiv'>
                <p>Total items: {totalItems}</p>
                <p>Total Price: <span style={{whiteSpace:'nowrap'}}>{(totalPrice).toFixed(2)}</span> INR</p>
             </div>
             
             )}
             <br/><br/>
    </div>
  )
}

export default CartProductList