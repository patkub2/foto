import React from "react";
import styled from "styled-components";
import Layout from "./components/themeplate/Layout";
import NavBar from "./components/organisms/NavBar";
import Beaner from "./components/organisms/Beaner";

function App() {
  return (
    <>
      <Layout>
        <>
          <NavBar></NavBar>
          <Beaner />
        </>
      </Layout>
    </>
  );
}

export default App;
