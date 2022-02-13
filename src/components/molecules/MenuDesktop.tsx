import styled from "styled-components";
import arrowdown from "../../images/icons/arrowdown.svg";
import { useMediaQuery } from "react-responsive";

type Button = {
  color?: string;
};
const Container = styled.div`
  font-family: "Clash Grotesk", sans-serif;
  //border: 1px solid blue; /* BORDER TEST*/
  background-color: "transparent";
  color: ${({ theme }) => theme.colors.dark};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 5px 200px;
`;

const Button = styled.button<Button>`
  border: 0px solid blue; /* BORDER TEST*/

  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  color: ${({ color }) => color};
  font: normal normal medium 14px/17px "Clash Grotesk";
  letter-spacing: 0px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 40px;
`;

type Props = {};

const MenuDesktop = (props: Props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  return (
    <Container>
      <Button>
        Aparaty <img src={arrowdown}></img>
      </Button>
      <Button>
        Obiektywy <img src={arrowdown}></img>
      </Button>
      <Button>
        Oświetlenie <img src={arrowdown}></img>
      </Button>
      <Button>
        Pamięci <img src={arrowdown}></img>
      </Button>
      <Button>
        Akcesoria <img src={arrowdown}></img>
      </Button>
      <Button>Nowości</Button>
      <Button color="#D91847">Promocje</Button>
    </Container>
  );
};

export default MenuDesktop;
