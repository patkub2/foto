import styled from "styled-components";
import shopifyblack from "../../images/icons/shopifyblack.svg";
import heart from "../../images/icons/heart.svg";
import person from "../../images/icons/person.svg";
type Props = {};
type Button = {
  blue?: boolean;
};

const Navigation = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 50%;
`;
const Button = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;
const Shopify = styled.div<Button>`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 5px;
  width: 145px;
  height: 55px;

  background: rgb(60, 226, 206);
  background: linear-gradient(
    90deg,
    rgba(60, 226, 206, 1) 0%,
    rgba(60, 216, 226, 1) 100%
  );

  ${({ blue }) => (blue ? "" : "background: transparent")};
  color: ${({ blue }) =>
    blue
      ? ({ theme }) => theme.colors.white
      : ({ theme }) => theme.colors.dark};
  font-weight: ${({ blue }) => (blue ? "700" : "400")};
  box-shadow: ${({ blue }) => (blue ? "0px 6px 24px #158E953D" : "")};
  img {
    width: 24px;
    height: 24px;
  }
`;
const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  height: 55px;
  width: 40%;
  color: ${({ theme }) => theme.colors.dark};
  border: 2px solid ${({ theme }) => theme.colors.verylight};
  ::placeholder {
    color: ${({ theme }) => theme.colors.verylight};
  }
`;
const DesktopNavigation = (props: Props) => {
  return (
    <Navigation>
      <Input type="text" placeholder="Szukaj produktu"></Input>
      <Shopify>
        <img src={person}></img>Twoje konto
      </Shopify>
      <Shopify>
        <img src={heart}></img>Ulubione
      </Shopify>
      <Shopify blue>
        <img src={shopifyblack}></img>12 458 zł
      </Shopify>
    </Navigation>
  );
};

export default DesktopNavigation;
