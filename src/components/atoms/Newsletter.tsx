import styled from "styled-components";
import subtractline from "../../images/icons/subtractline.svg";
import mail from "../../images/icons/mail.svg";

type ColorText = {
  isBig?: boolean;
};

const InfoContainer = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  ${({ theme }) => theme.media.desktop} {
    width: auto;
    min-width: 500px;
    // margin: 0px 30px;
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

const ColorText = styled.div<ColorText>`
  font-size: ${({ isBig }) => (isBig ? "40px" : "14px")};
  font-weight: 700;
  // padding: 15px 0px;
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
  ${({ theme }) => theme.media.desktop} {
    width: 70%;
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
  ${({ theme }) => theme.media.desktop} {
    width: auto;
  }
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
const H5 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${({ theme }) => theme.media.desktop} {
    flex-wrap: nowrap;
  }
`;

type Props = {};

const Newsletter = (props: Props) => {
  return (
    <InfoContainer>
      <InfoLinkTitle>
        Newsletter <img src={subtractline}></img>
      </InfoLinkTitle>
      <H5>
        <Input type="text" placeholder="Twój adres email"></Input>
        <Button>
          <div>
            <img src={mail}></img>Zapisz się
          </div>
        </Button>
      </H5>

      <InfoLinkTitle>Kontakt</InfoLinkTitle>
      <ColorText isBig>321 654 987</ColorText>
      <H3>sklep@fø.to</H3>
    </InfoContainer>
  );
};

export default Newsletter;
