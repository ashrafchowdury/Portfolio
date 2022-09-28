import React, { useEffect } from "react";
import Nav from "./blocks/Nav";
import Footer from "./blocks/Footer";
import Message from "./blocks/Message";
import AOS from "aos";
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Nav />
      <Message />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
