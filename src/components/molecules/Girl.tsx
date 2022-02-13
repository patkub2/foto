import React from "react";
import styled from "styled-components";
import girl from "../../images/photoGirl.png";
type Props = {};

const Img = styled.img`
  font-family: "Panchang", sans-serif;
  font-size: 32px;
  height: 250px;
  //border: 1px solid red; /* BORDER TEST*/
  z-index: 2;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    height: 100%;
  }
`;
const Girl = (props: Props) => {
  return <Img src={girl}></Img>;
};

export default Girl;
