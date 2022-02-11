import styled from "styled-components";
import arrow from "../../images/icons/arrowdown.svg";
import ProductThemplate from "../atoms/ProductThemplate";
import MenuProducts from "./../molecules/MenuProducts";
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  margin: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <MenuProducts />
      <ProductThemplate />
    </Container>
  );
};

export default Products;
