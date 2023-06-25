import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Franchise from "./components/Franchise";
import Featured from "./components/Featured";

const HomePage: React.FC = () => {
  return (
    <div>
      <Nav />
      <Featured />
      <Franchise />
      <Footer />
    </div>
  );
};

export default HomePage;
