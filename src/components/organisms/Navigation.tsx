import styled from "styled-components";
import glass from "../../images/icons/glass.svg";
import heart from "../../images/icons/heart.svg";
import person from "../../images/icons/person.svg";
import shopify from "../../images/icons/shopify.svg";
import menu from "../../images/icons/menu.svg";
const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.white};
  height: 74px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 0px 34px -16px rgba(37, 37, 37, 1);
`;

const Icon = styled.img`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 24px;
  height: 24px;
`;

type Props = {};

const Navigation = (props: Props) => {
  return (
    <Container>
      <Icon src={menu}></Icon>
      <Icon src={glass}></Icon>
      <Icon src={heart}></Icon>
      <Icon src={person}></Icon>
      <Icon src={shopify}></Icon>
    </Container>
  );
};

export default Navigation;
