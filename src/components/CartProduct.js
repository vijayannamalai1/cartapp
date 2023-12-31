import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'

const CartProduct = ({product}) => {


  return (
    <div className='card'>
      <p>{(product.title).slice(0,35)}</p>
      <img src={product.image} />
      <p>Quantity: {product.quantity}</p>
      <p>Price:{(product.price*product.quantity).toFixed(2)}</p>
    </div>
  )
}

export default CartProduct