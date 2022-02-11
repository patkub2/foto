import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import internal from "stream";

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

const FetchAPI = (props: Props) => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        setData(response.data);
        console.log(data);
      });
  }, []);

  return { data };
};

export default FetchAPI;
