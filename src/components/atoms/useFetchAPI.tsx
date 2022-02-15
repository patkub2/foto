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

const useFetchAPI = (props: Props) => {
  const [dataApi, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://fakestoreapi.com/products?limit=20")
      .then((response) => {
        setData(response.data);
        console.log(dataApi);
      });
  }, []);

  return { dataApi };
};

export default useFetchAPI;
