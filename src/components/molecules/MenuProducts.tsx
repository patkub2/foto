import styled from "styled-components";
import arrow from "../../images/icons/arrowdown.svg";

const Menu = styled.div`
  font-size: 20px;
  font-weight: 700;
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Button = styled.div`
  font-size: 20px;
  font-weight: 700;
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const Space = styled.hr`
  width: 20vw;
`;
type Props = {};

const MenuProducts = (props: Props) => {
  return (
    <Menu>
      <Space />
      <Button>
        Polecane <img src={arrow}></img>
      </Button>

      <Space />
    </Menu>
  );
};

export default MenuProducts;
