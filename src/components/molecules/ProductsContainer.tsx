import ProductThemplate from "../atoms/ProductThemplate";
import useFetchAPI from "./../atoms/useFetchAPI";

const ProductsContainer = () => {
  const { dataApi } = useFetchAPI([]);
  return (
    <>
      {dataApi.map((item) => (
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
