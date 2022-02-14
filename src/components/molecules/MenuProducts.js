import styled from "styled-components";
import arrow from "../../images/icons/arrowdown.svg";
import { useMediaQuery } from "react-responsive";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useState, useEffect } from "react";

const Menu = styled.div`
  font-size: 20px;
  font-weight: 700;
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .dropdownmenu {
    border: 1px solid red; /* BORDER TEST*/
    border: 2px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-wrap: nowrap;
  }
  .myPlaceholderClassName {
    border: 1px solid red; /* BORDER TEST*/
  }

  ${({ theme }) => theme.media.desktop} {
    margin: 30px 0;
  }
`;
const Button = styled.div`
  font-size: 20px;
  font-weight: 700;
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${({ theme }) => theme.media.desktop} {
    margin: 0 30px;
    font: normal normal 600 20px/25px Clash Grotesk;
    opacity: ${({ grey }) => (grey ? "0.3" : "1")};
  }
`;
const Hr = styled.hr`
  width: 20vw;
`;

const options = ["Polecane", "Promocje", "Nowości"];

const MenuProducts = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  const [values, setValues] = useState("Polecane");
  return (
    <Menu>
      <Hr />
      {isBigScreen ? (
        <>
          <Button>Polecane</Button>
          <Button grey>Promocje</Button>
          <Button grey>Nowości</Button>
        </>
      ) : (
        <Button>
          Polecane <img src={arrow}></img>
        </Button>
      )}
      <Hr />
    </Menu>
  );
};

export default MenuProducts;
