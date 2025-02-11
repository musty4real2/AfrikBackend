import React from "react";
import Layout from "./layout/Layout";
import ScrollToTop from "../src/components/ScrollToTop"; // Ensure this component is imported
import "./App.css";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  );
};

export default App;
