import styled from "styled-components";

const Img = styled.img`
  font-family: "Panchang", sans-serif;
  font-size: 32px;

  //width: 100%;
  height: 100px;
  //border: 1px solid ${({ theme }) => theme.colors.verylight}; /* BORDER TEST*/
  z-index: 2;
  padding: 10px;
`;
const Container = styled.div`
  font-family: "Panchang", sans-serif;
  font-size: 32px;
  //height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.verylight}; /* BORDER TEST*/
  justify-content: center;
  display: flex;
  align-items: center;
`;

type Props = {
  image: string;
};

const CarouselElement = (props: Props) => {
  return (
    <Container>
      <Img src={props.image}></Img>
    </Container>
  );
};

export default CarouselElement;
