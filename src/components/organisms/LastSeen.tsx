import styled from "styled-components";
import Carousel from "../molecules/Carousel";

const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin: 20px 0;
`;

type Props = {};

const LastSeen = (props: Props) => {
  return (
    <Container>
      <H1>Ostatnio oglądane:</H1>
      <Carousel />
    </Container>
  );
};

export default LastSeen;
