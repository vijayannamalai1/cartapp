import {createContext,useState,useEffect} from 'react'
import axios from 'axios'

const DataContext=createContext({})

export const DataProvider=({children})=>{
    const [productData,setProductData]=useState([])
    const [cartProducts,setCartProducts]=useState([])
    useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(res=>{
     console.log(res.data)
     setProductData(res.data)
    }).catch(err=>{
        console.log(err)
    })
    },[])
    return (
        <DataContext.Provider value={{productData,cartProducts,setCartProducts}}>
{children}
        </DataContext.Provider>
    )

}

export default DataContext;