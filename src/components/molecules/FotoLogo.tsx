import React from "react";
import styled from "styled-components";
import logo from "../../images/fotoLogo.png";
type Props = {};

const Img = styled.div`
  font-family: "Panchang", sans-serif;
  font-size: 32px;
  //border: 1px solid red; /* BORDER TEST*/
`;
const FotoLogo = (props: Props) => {
  return <Img>FØ.TO</Img>;
};

export default FotoLogo;
