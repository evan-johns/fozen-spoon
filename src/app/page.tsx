import React from "react";
import Head from "next/head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Franchise from "./components/Franchise";
import Featured from "./components/Featured";
import Testimonials from "./components/Testimonials";

const HomePage: React.FC = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="./app/favicon.ico" sizes="any" />
      </Head>
      <Nav />
      <Featured />
      <Testimonials />
      <Franchise />
      <Footer />
    </div>
  );
};

export default HomePage;
