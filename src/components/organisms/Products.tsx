import styled from "styled-components";
import arrow from "../../images/icons/arrowdown.svg";
import ProductThemplate from "../atoms/ProductThemplate";
import MenuProducts from "./../molecules/MenuProducts";
import ProductsContainer from "./../molecules/ProductsContainer";
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  margin: 20px 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const CheckMoreButton = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  font-size: 16px;
  font-weight: 800;
  padding: 15px 0px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
`;
type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <MenuProducts />
      <ProductsContainer />
      <CheckMoreButton>Zobacz więcej produktów</CheckMoreButton>
    </Container>
  );
};

export default Products;
