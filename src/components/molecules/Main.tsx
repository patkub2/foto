import styled from "styled-components";
import frame from "../../images/Frame.png";
import { useMediaQuery } from "react-responsive";
const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: "transparent";
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    width: 40%;
  }
`;
const H1 = styled.div`
  font-size: 14px;
  line-height: 1.6;
  ${({ theme }) => theme.media.desktop} {
    font-size: 24px;
  }
`;
const H2 = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.3;
  ${({ theme }) => theme.media.desktop} {
    font-size: 48px;
  }
`;
const H3 = styled.div`
  font-size: 14px;
  line-height: 1.4;
`;
const Button = styled.button`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  font-weight: 400;
  height: 59px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 10px;
  margin: 20px 0;
  ${({ theme }) => theme.media.desktop} {
    min-width: 250px;
    width: 40%;
  }
`;

type Props = {};

const Main = (props: Props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  return (
    <Container>
      <H1>Nowa kolekcja</H1>
      <H2>RETRO 1984</H2>
      <H3>
        Product management breakout fastworks rehydrate the team and how much
        bandwidth do you have can I just chime in on that one tread it daily
        clear blue water dogpile that. Slow-walk our commitment.
      </H3>
      <Button>
        <img src={frame}></img>Dowiedz się więcej
      </Button>
    </Container>
  );
};

export default Main;
