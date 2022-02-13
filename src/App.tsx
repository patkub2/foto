import Layout from "./components/themeplate/Layout";
import NavBar from "./components/organisms/NavBar";
import Beaner from "./components/organisms/Beaner";
import Main from "./components/molecules/Main";
import Navigation from "./components/organisms/Navigation";
import styled from "styled-components";
import LastSeen from "./components/organisms/LastSeen";
import Products from "./components/organisms/Products";
import Contact from "./components/organisms/Contact";
import Footer from "./components/organisms/Footer";

import { useMediaQuery } from "react-responsive";
import MenuDesktop from "./components/molecules/MenuDesktop";
const Space = styled.div`
  height: 100vh;
`;
function App() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1500px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1500px)" });
  return (
    <>
      <Layout>
        <>
          {isSmallScreen && <Navigation />}
          <NavBar />
          {isBigScreen && <MenuDesktop />}

          <Beaner />

          <LastSeen />
          <Products />
          <Contact />
          <Footer />
          <Space />
        </>
      </Layout>
    </>
  );
}

export default App;
