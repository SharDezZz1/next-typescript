import React, { useState, useEffect, use } from "react";
import Image from "next/image";
// styles
import s from "./Products.module.scss";
// boostrap
import { Container, Row, Col } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
// utils
import { getProducts } from "@/utils/Fetch";
// components
import Product from "@/components/cards/product";

// Server side rendering
export const getServerSideProps = async () => {
  const prod = await getProducts("https://fakestoreapi.com", "/products").then(
    (res) => {
      return res;
    }
  );
  return {
    props: {
      prod,
    },
  };
};

const Products = (props: any) => {
  const { prod } = props;
  // Client side rendering
  const [products, setProducts] = useState(prod);
  const [loading, setLoading] = useState<boolean>(false);
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [cart, setCart] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  
  

  //search
  useEffect(() => {
    setLoading(true);
    if (search) {
      const searchProducts = [...products].filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      });
      setProducts(searchProducts);
    } else {
      setProducts(prod);
    }
    setLoading(false);
  }, [search]);




  //sort
  useEffect(() => {
    setLoading(true);
    if (sort === "asc") {
      const sortAsc = [...products].sort((a, b) => a.price - b.price);
      setProducts(sortAsc);
    } else if (sort === "desc") {
      const sortDesc = [...products].sort((a, b) => b.price - a.price);
      setProducts(sortDesc);
    }
    setLoading(false);
  }, [sort]);
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <div className={s.products}>Products</div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <select onChange={(e) => {
              setSort(e.target.value);
            }} className={s.select}>
              <option disabled>All</option>
              <option value="asc">Sort ASC</option>
              <option value="desc">Sort DESC</option>
            </select>
            <input type="text" name="search" id="search" placeholder="Search" onChange={
              (e) => {
                setSearch(e.target.value);
              }
            } />

          </Col>
        </Row>
        <Row>
          {!loading && products.length === 0 && (
            <div className={s.products__notFound}>Products not founded</div>
          )}
          {!loading && products ? (
            <>
              {products.map((product: any) => {
                return (
                  <Col lg={4} key={product.id}>
                    <Product product={product} />
                  </Col>
                );
              })}
            </>
          ) : (
            <Spinner animation="grow" />
          )}

          {/* <Col lg={4}>
              <Product />
            </Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Products;