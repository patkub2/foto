import styled from "styled-components";
import Carousel from "../molecules/Carousel";
import mercelogo from "../../images/icons/mercelogo.svg";
const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px 30px;
`;

type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      © 2021 FØ.TO. Wszelkie prawa zastrzeżone. e-commerce platrofm by:
      <img src={mercelogo}></img>
    </Container>
  );
};

export default Footer;
