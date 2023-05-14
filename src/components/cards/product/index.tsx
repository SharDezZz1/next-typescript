import React from "react";
import Image from "next/image";
//redux
import { useDispatch } from "react-redux";
import { addProduct } from "@/store/futures/cart";
//styles
import s from "./product.module.scss";

const Product = (props: any) => {
  const { product } = props;
  const { title, price, image } = product;
  const dispatch = useDispatch();
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
            dispatch(addProduct(product));
          }
        } className={s.products__card_button}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;