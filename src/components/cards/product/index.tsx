import React from "react";
import Image from "next/image";
//styles
import s from "./product.module.scss";

const Product = (props: any) => {
  const { product } = props;
  const { title, price, image } = product;
  return (
    <>
      <div className={s.products__card}>
        <div className={s.products__card_img}>
          {/* <Image src={image} alt="product" width={200} height={200} /> */}
        </div>
        <div className={s.products__card_title}>
          {title.length > 20 ? title.slice(0, 20) + "..." : title}
        </div>
        <div className={s.products__card_price}>{price}</div>
        <button onClick={
          () => {
            //add to local storage
            let cart = localStorage.getItem("cart");
            if (cart) {
              let cartArray = JSON.parse(cart);
              cartArray.push(product);
              localStorage.setItem("cart", JSON.stringify(cartArray));
            } else {
              let cartArray = [];
              cartArray.push(product);
              localStorage.setItem("cart", JSON.stringify(cartArray));
            }
          }
        } className={s.products__card_button}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;