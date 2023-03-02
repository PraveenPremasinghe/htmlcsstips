import React from "react";
import NewUpdate from './../Components/NewUpdate_Section';
import { Container, Row, Col } from "react-bootstrap";
import HeroSection from './../Components/HeroSection';
import TechPost_Section from './../Components/TechPost_Section';
import Footer from './../Layouts/Footer';

const Home = (props) => {
  return (
    <>

<div className="Container">
      <div className="NewUpdate_section">
        <NewUpdate/>
      </div>
      <HeroSection/>
      <br />

      <TechPost_Section PostSectiontitle="Tech"/>
      <TechPost_Section PostSectiontitle="how-to"/>
      <TechPost_Section PostSectiontitle="GAMETECHIE"/>



    </div>
    <Footer />


    </>
  );
};

export default Home;
