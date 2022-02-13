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

const Space = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <>
      <Layout>
        <>
          <Navigation />
          <NavBar></NavBar>
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
