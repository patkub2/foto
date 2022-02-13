import styled from "styled-components";
import Girl from "./../molecules/Girl";
import { useMediaQuery } from "react-responsive";
import Main from "./../molecules/Main";
const FrameContainer = styled.div`
  position: absolute;
  //border: 1px solid green; /* BORDER TEST*/
  justify-content: flex-end;
  display: flex;
  align-items: center;
  height: 260px;
  width: 100%;
  z-index: 1;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid blue; /* BORDER TEST*/
    height: 650px;
  }
`;
const Frame = styled.div`
  position: absolute;
  border-bottom: 4px solid white;
  border-left: 4px solid white;
  border-top: 4px solid white;

  height: 210px;
  width: 90%;
  z-index: 1;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    height: 520px;
  }
`;
const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
  height: 260px;
  justify-content: space-evenly;
  display: flex;
  align-items: flex-end;
  ${({ theme }) => theme.media.desktop} {
    //border: 1px solid red; /* BORDER TEST*/
    height: 650px;
    justify-content: center;
    align-items: center;
  }
`;

type Props = {};

const Beaner = (props: Props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1500px)" });

  return (
    <>
      <Container>
        <FrameContainer>
          <Frame />
        </FrameContainer>

        {isBigScreen && <Main />}
        <Girl />
      </Container>
      {isSmallScreen && <Main />}
    </>
  );
};

export default Beaner;
