import styled from "styled-components";
import heart from "../../images/icons/heart.svg";
import MenuProducts from "./../molecules/MenuProducts";
const Container = styled.div`
  border: 1px solid blue; /* BORDER TEST*/
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  flex-wrap: wrap;
`;
const Photo = styled.div`
  border: 1px solid blue; /* BORDER TEST*/
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  position: relative;
`;
const Bestseller = styled.div`
  border: 1px solid blue; /* BORDER TEST*/
  padding: 0 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  padding: 2px 15px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
`;
const Promotion = styled.div`
  position: absolute;
  align: right;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  padding: 2px 15px;
  bottom: 0px;
  right: 0px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.light};
`;
const Heart = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 1px solid blue; /* BORDER TEST*/

  height: 24px;
  width: 24px;
  z-index: 4;
`;
const Name = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  width: 50%;
`;
const Brand = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 700;
`;
const Model = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 400;
`;
const Price = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 700;
  width: 50%;
  flex-direction: column;
`;
const PriceNew = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 700;
`;
const PriceOld = styled.div`
  position: relative;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
`;
type Props = {};

const ProductThemplate = (props: Props) => {
  return (
    <Container>
      <Photo>
        <Bestseller>Bestseller</Bestseller>
        <Heart src={heart} />
        <Promotion>-50%</Promotion>
      </Photo>
      <Name>
        <Brand>Canon</Brand>
        <Model>AE-1</Model>
      </Name>
      <Price>
        <PriceNew>2599</PriceNew>
        <PriceOld>3599</PriceOld>
      </Price>
    </Container>
  );
};

export default ProductThemplate;
