import React from "react";
import AboutMe from "../../Components/homeComponentes/aboutMe";
import Apresentation from "../../Components/homeComponentes/apresentation";
import Footer from "../../Components/homeComponentes/footer";
import Project from "../../Components/homeComponentes/projects";
import Skills from "../../Components/homeComponentes/skills";
import Techs from "../../Components/homeComponentes/techs";
import { Container } from "./styled";

function Home() {
  return (

      <Container>
        <Apresentation />
        <AboutMe />
        <Techs />
        <Skills/>
        <Project />
        <Footer />
      </Container>

  );
}

export default Home;
