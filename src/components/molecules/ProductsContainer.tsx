import styled from "styled-components";
import arrow from "../../images/icons/arrowdown.svg";
import ProductThemplate from "../atoms/ProductThemplate";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";

type Props = {};
interface User {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductsContainer = (props: Props) => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://fakestoreapi.com/products?limit=20")
      .then((response) => {
        setData(response.data);
        console.log(data[1].image);
      });
  }, []);

  return (
    <>
      {data.map((item) => (
        <ProductThemplate
          key={item.id}
          bestseller
          like
          image={item.image}
          title={item.title}
          price={item.price}
          category={item.category}
          promotion={item.id}
        />
      ))}
    </>
  );
};

export default ProductsContainer;
