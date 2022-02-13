import React from "react";
import styled from "styled-components";
import FotoLogo from "./../molecules/FotoLogo";
import { useMediaQuery } from "react-responsive";
import DesktopNavigation from "../molecules/DesktopNavigation";

type Props = {};
const Text = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  font-size: 13px;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    width: 100%;
    font: normal normal normal 16px/19px Clash Grotesk;
    display: flex;
    flex-wrap: nowrap;

    margin-top: 20px;
  }
`;
const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  padding: 16px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
  }
`;
const Cont = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 100%;
  //max-width: 1500px;
  justify-content: space-evenly;
  display: flex;
  align-items: baseline;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 200px;
  }
`;
const Hr = styled.hr`
  width: 90%;
  height: 1px;
`;

const NavBar = (props: Props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  return (
    <Container>
      <Cont>
        <FotoLogo />
        {isBigScreen && <DesktopNavigation />}

        <Text>
          Everything for FØTO
          {isBigScreen && <Hr />}
        </Text>
      </Cont>
    </Container>
  );
};

export default NavBar;
