import React, {useState, useEffect} from 'react'
//import styles
import s from './Products.module.scss'
//import utils
import {getProducts} from '@/utils/Fetch'

const Products = () => {
    //products
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect( () => {
        setLoading(true)
        getProducts('https://fakestoreapi.com', '/products', "5", "desc").then( (res) => {
            setProducts(res)
        })
        setLoading(false)
    }, [])
    console.log(products)
    return (
        <>
            <h1 className={s.title}>Products</h1>
        </>
    )
}

export default Products