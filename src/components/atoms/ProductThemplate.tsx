import styled from "styled-components";
import heart from "../../images/icons/heart.svg";
import heartfull from "../../images/icons/heartfull.svg";

const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  //flex-direction: column;
  flex-wrap: wrap;
  margin: 10px 0;
  ${({ theme }) => theme.media.desktop} {
    width: 22%;
  }
`;
const Photo = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.light};
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
    height: 300px;
  }
`;
const ImageContainer = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  //border: 1px solid blue; /* BORDER TEST*/
  max-width: 90%;
  max-height: 90%;
`;
const Bestseller = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
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
  //border: 1px solid blue; /* BORDER TEST*/
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
  ${({ theme }) => theme.media.desktop} {
    top: 0px;
    bottom: auto;
  }
`;
const Heart = styled.img`
  position: absolute;
  bottom: 10px;
  left: 10px;
  //border: 1px solid blue; /* BORDER TEST*/

  height: 24px;
  width: 24px;
  z-index: 1;
`;
const Name = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;
  font-weight: 700;
  width: 50%;
  padding-left: 5px;
`;
const Brand = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 700;
`;
const Model = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 400;
`;
const Price = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  font-size: 14px;
  font-weight: 700;
  width: 50%;
  flex-direction: column;
  padding-right: 5px;
`;
const PriceNew = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  color: ${({ theme }) => theme.colors.red};
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 700;
`;
const PriceOld = styled.div`
  position: relative;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
`;
type Props = {
  bestseller?: boolean;
  like?: boolean;
  promotion?: number;
  image: string;
  title: string;
  price: number;
  category: string;
};

const ProductThemplate = (props: Props) => {
  const MAX_LENGTH = 10;
  return (
    <Container>
      <Photo>
        <ImageContainer>
          <Img src={props.image} alt={props.title}></Img>
        </ImageContainer>

        {props.bestseller ? <Bestseller>Bestseller</Bestseller> : null}
        <Heart src={props.like ? heartfull : heart} />
        {props.promotion ? <Promotion>-{props.promotion}%</Promotion> : null}
      </Photo>
      <Name>
        <Brand>
          {props.title.length > MAX_LENGTH ? (
            <div>{`${props.title.substring(0, MAX_LENGTH)}...`}</div>
          ) : (
            props.title
          )}
        </Brand>
        <Model>{props.category}</Model>
      </Name>
      <Price>
        <PriceNew>{props.price} z??</PriceNew>
        <PriceOld>{props.price} z??</PriceOld>
      </Price>
    </Container>
  );
};

export default ProductThemplate;
