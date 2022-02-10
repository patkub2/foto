import React from "react";
import styled from "styled-components";
import FotoLogo from "./../molecules/FotoLogo";

type Props = {};
const Text = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  font-size: 13px;
`;
const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  height: 70px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;
const Cont = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  align-items: baseline;
`;

const NavBar = (props: Props) => {
  return (
    <Container>
      <Cont>
        <FotoLogo></FotoLogo>
        <Text>Everything for FØTO</Text>
      </Cont>
    </Container>
  );
};

export default NavBar;
