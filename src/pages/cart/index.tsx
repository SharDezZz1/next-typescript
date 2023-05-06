import React, { useState, useEffect, useMemo } from "react";
import s from './cart.module.scss'
import { LocalCart } from "@/modules/Cart";

const Cart = () => {
    const LCart = new LocalCart();
    //get cart from local storage
    const [cart, setCart] = useState<any>([]);
    const [total, setTotal] = useState<number>(0);
    useEffect(() => {
        LCart.getCart();
        setCart(LCart.getCart());
        setTotal(LCart.getTotalPrice());
    }, []);


    return (
        <>
            <div className={s.cart}>
                <h1>Cart</h1>
            </div>
            <div>
                <button onClick={() => {
                    //clear local storage
                    LCart.clearCart();
                    setCart(LCart.getCart());
                    setTotal(LCart.getTotalPrice());
                }}>Clear cart</button>
            </div>
            <div className={s.cart__container}>
                <div className={s.cart__container_total}>Total: {total}</div>
                <div className={s.cart__container_items}>
                    {cart.map((item: any) => {
                        return (
                            <div className={s.cart__container_items_item}>
                                <div className={s.cart__container_items_item_img}>
                                    <img width={100} height={100} src={item.image} alt="product" />
                                </div>
                                <div className={s.cart__container_items_item}>{item.title}</div>
                                <div className={s.cart__container_items_item}>{item.price}</div>
                                <div className={s.cart__container_items_item}>{item.quantity}
                                </div>
                                <button onClick={
                                    () => {
                                        //add quantity
                                        LCart.addQuantity(item.id);
                                        setCart(LCart.getCart());
                                        setTotal(LCart.getTotalPrice());
                                    }
                                }>+1</button>
                                <button onClick={
                                    () => {
                                        //remove quantity
                                        LCart.removeQuantity(item.id);
                                        setCart(LCart.getCart());
                                        setTotal(LCart.getTotalPrice());
                                    }
                                }>-1</button>
                                <button onClick={() => {
                                    //remove from local storage 
                                    LCart.removeFromCart(item.id);
                                    setCart(LCart.getCart());
                                    setTotal(LCart.getTotalPrice());
                                }} className={s.cart__container_items_item_button}>Remove</button>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>
    )
}

export default Cart