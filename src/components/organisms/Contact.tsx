import styled from "styled-components";
import subtractline from "../../images/icons/subtractline.svg";
import mail from "../../images/icons/mail.svg";
import Newsletter from "../atoms/Newsletter";

type ColorText = {
  isBig?: boolean;
};
const Container = styled.div`
  border: 1px solid blue; /* BORDER TEST*/
  margin: 20px 30px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 2px solid ${({ theme }) => theme.colors.verylight};
  ${({ theme }) => theme.media.desktop} {
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: flex-start;
    margin: 20px 200px;
  }
`;

const InfoContainer = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.media.desktop} {
    width: auto;
    //min-width: 300px;
    max-width: 500px;
  }
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
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  ${({ theme }) => theme.media.desktop} {
    padding: 10px 0px;
  }
`;
const ColorText = styled.div<ColorText>`
  font-size: ${({ isBig }) => (isBig ? "40px" : "14px")};
  font-weight: 700;
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

type Props = {};

const Contact = (props: Props) => {
  return (
    <Container>
      <InfoContainer>
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
      </InfoContainer>
      <InfoContainer>
        <InfoLinkTitle>
          <div>Płatność i dostawa</div> <img src={subtractline}></img>
        </InfoLinkTitle>

        <InfoLink>
          Akceptowalne formy płatności to karta płatnicza, przelew online,
          przelew tradycyjny, płatność przy odbiorze.
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
      </InfoContainer>
      <Newsletter />
    </Container>
  );
};

export default Contact;
