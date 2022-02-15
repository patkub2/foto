import styled from "styled-components";
import glass from "../../images/icons/glass.svg";
import heart from "../../images/icons/heart.svg";
import person from "../../images/icons/person.svg";
import shopify from "../../images/icons/shopify.svg";
import menu from "../../images/icons/menu.svg";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.white};
  height: 74px;
  border-radius: 10px 10px 0 0;
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  z-index: 2;
  box-shadow: 0px 0px 34px -16px rgba(37, 37, 37, 1);
`;

const Icon = styled.img`
  //border: 1px solid blue; /* BORDER TEST*/
  width: 24px;
  height: 24px;
`;
const Button = styled.button`
  //border: 1px solid blue; /* BORDER TEST*/
  border: none;
`;

const ContainerBurgir = styled.div`
  background-color: ${({ theme }) => theme.colors.light};

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background-color: ${({ theme }) => theme.colors.light};
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background-color: ${({ theme }) => theme.colors.light};
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background-color: ${({ theme }) => theme.colors.dark};
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background-color: ${({ theme }) => theme.colors.light};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    background-color: ${({ theme }) => theme.colors.light};
    //border: 1px solid red; /* BORDER TEST*/
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  }

  /* Individual item */
  .bm-item {
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const Link = styled.a`
  font-size: 20px;
  margin: 15px 0;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.dark};
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
`;
const Navigation = () => {
  const [value, setValues] = useState<boolean>(false);
  return (
    <>
      <ContainerBurgir>
        <Menu
          isOpen={value}
          onClose={() => setValues(false)}
          customBurgerIcon={false}
        >
          <Link>Aparaty</Link>
          <Link>Obiektywy</Link>
          <Link>Oświetlenie</Link>
          <Link>Akcesoria</Link>
          <Link>Nowości</Link>
          <Link>Promocje</Link>
        </Menu>
      </ContainerBurgir>
      <Container>
        <Button
          onClick={() => {
            setValues(!value);
          }}
        >
          <Icon src={menu}></Icon>
        </Button>

        <Icon src={glass}></Icon>
        <Icon src={heart}></Icon>
        <Icon src={person}></Icon>
        <Icon src={shopify}></Icon>
      </Container>
    </>
  );
};

export default Navigation;
