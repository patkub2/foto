import React from "react";
import styled from "styled-components";
import Girl from "./../molecules/Girl";

const FrameContainer = styled.div`
  position: absolute;
  // border: 1px solid green; /* BORDER TEST*/
  justify-content: flex-end;
  display: flex;
  align-items: center;
  height: 261px;
  width: 100%;
  z-index: 1;
`;
const Frame = styled.div`
  position: absolute;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
  border-top: 4px solid white;

  height: 210px;
  width: 90%;
  z-index: 1;
`;
const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  height: 261px;
  justify-content: space-evenly;
  display: flex;
  align-items: flex-end;
`;

type Props = {};

const Beaner = (props: Props) => {
  return (
    <Container>
      <FrameContainer>
        <Frame />
      </FrameContainer>
      <Girl />
    </Container>
  );
};

export default Beaner;
