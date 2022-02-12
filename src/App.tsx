import Layout from "./components/themeplate/Layout";
import NavBar from "./components/organisms/NavBar";
import Beaner from "./components/organisms/Beaner";
import Main from "./components/organisms/Main";
import Navigation from "./components/organisms/Navigation";
import styled from "styled-components";
import LastSeen from "./components/organisms/LastSeen";
import Products from "./components/organisms/Products";
import Information from "./components/organisms/Information";

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
          <Main />
          <LastSeen />
          <Products />
          <Information />
          <Space />
        </>
      </Layout>
    </>
  );
}

export default App;
