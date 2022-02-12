import styled from "styled-components";
import subtractline from "../../images/icons/subtractline.svg";
import mail from "../../images/icons/mail.svg";
import ProductThemplate from "../atoms/ProductThemplate";
import MenuProducts from "./../molecules/MenuProducts";
import ProductsContainer from "./../molecules/ProductsContainer";

type ColorText = {
  isBig?: boolean;
};
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  margin: 20px 30px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid ${({ theme }) => theme.colors.verylight};
`;

const InfoLinkTitle = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  font-size: 14px;
  font-weight: 800;
  padding: 15px 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  margin-top: 20px;
`;

const InfoLink = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding: 15px 0px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
`;
const ColorText = styled.div<ColorText>`
  font-size: ${({ isBig }) => (isBig ? "40px" : "14px")};
  font-weight: 700;
  //padding: 15px 0px;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  color: rgb(60, 226, 206);
  color: linear-gradient(
    90deg,
    rgba(60, 226, 206, 1) 0%,
    rgba(60, 216, 226, 1) 100%
  );
`;
const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  height: 60px;
  color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.verylight};
  ::placeholder {
    color: ${({ theme }) => theme.colors.verylight};
  }
`;
const Button = styled.button`
  border: 0px solid blue;
  font-size: 14px;
  font-weight: 800;
  width: 100%;
  margin: 10px 0px;
  height: 60px;
  color: ${({ theme }) => theme.colors.white};
  background: rgb(60, 226, 206);
  background: linear-gradient(
    90deg,
    rgba(60, 226, 206, 1) 0%,
    rgba(60, 216, 226, 1) 100%
  );
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  div {
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  box-shadow: 0px 0px 87px -30px rgba(37, 37, 37, 1);
`;
const H3 = styled.div`
  font-size: 20px;
  font-weight: 600;
  //padding: 15px 0px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
`;
type Props = {};

const Information = (props: Props) => {
  return (
    <Container>
      <InfoLinkTitle>
        Informacje <img src={subtractline}></img>
      </InfoLinkTitle>
      <InfoLink>Status zamówienia</InfoLink>
      <InfoLink>Zwroty, wymiana, reklamacje</InfoLink>
      <InfoLink>Regulamin sklepu</InfoLink>
      <InfoLink>Formy płatności </InfoLink>
      <InfoLink>Koszty dostawy</InfoLink>
      <InfoLink>O firmie</InfoLink>
      <InfoLink>Program lojalnościowy</InfoLink>
      <InfoLink>Kontakt</InfoLink>
      <InfoLink>Polityka cookies sklepu</InfoLink>
      <InfoLinkTitle>
        Płatność i dostawa <img src={subtractline}></img>
      </InfoLinkTitle>

      <InfoLink>
        Akceptowalne formy płatności to karta płatnicza, przelew online, przelew
        tradycyjny, płatność przy odbiorze.
      </InfoLink>
      <InfoLink>
        Metody dostawy: Przesyłka kurierska lub odbiór osobisty w sklepie.
      </InfoLink>
      <InfoLink>
        Koszty dostawy: wpłata na konto: 9,90 zł opłata za pobraniem: 14,90 zł
      </InfoLink>
      <InfoLink>
        Przy zamówieniu powyżej 200 zł wysyłka gratis! Powyższe ceny dotyczą
        wysyłki na trerenie Polski
      </InfoLink>
      <ColorText>30 dni na odstąpienie od umowy!</ColorText>
      <InfoLinkTitle>
        Newsletter <img src={subtractline}></img>
      </InfoLinkTitle>
      <Input type="text" placeholder="Twój adres email"></Input>
      <Button>
        <div>
          <img src={mail}></img>Zapisz się
        </div>
      </Button>
      <InfoLinkTitle>Kontakt</InfoLinkTitle>
      <ColorText isBig>321 654 987</ColorText>
      <H3>sklep@fø.to</H3>
    </Container>
  );
};

export default Information;
