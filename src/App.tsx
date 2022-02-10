import React from "react";
import styled from "styled-components";
import Layout from "./components/themeplate/Layout";
import NavBar from "./components/organisms/NavBar";
import Beaner from "./components/organisms/Beaner";
import Main from "./components/organisms/Main";

function App() {
  return (
    <>
      <Layout>
        <>
          <NavBar></NavBar>
          <Beaner />
          <Main />
        </>
      </Layout>
    </>
  );
}

export default App;
