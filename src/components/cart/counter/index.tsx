import React, { useMemo } from 'react'
//redux
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '@/store/futures/cart'



const CartCounter = () => {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    const countCart = useMemo(() => {
        return cart.products.length;
    }, [cart]);

  return (
    <>
        <h1>{countCart}</h1>
    </>
  )
}

export default CartCounter