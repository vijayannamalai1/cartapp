import React from 'react'

const CartProduct = ({product}) => {


  return (
    <div className='card'>
      <p>{(product.title).slice(0,35)}</p>
      <img src={product.image} alt={product.title} />
      <p>Quantity: {product.quantity}</p>
      <p>Price: {(product.price*product.quantity).toFixed(2)} INR</p>
    </div>
  )
}

export default CartProduct