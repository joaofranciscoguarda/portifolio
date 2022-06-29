import React from "react";
import { Container, AboutMeSection, ImgDiv, AboutMeText } from "./styles";
import myPhoto from "../../../imgs/myphoto.png";
import FakeHTML from "../../FakeHTML";
import CTAButton from "../../CTAButton";

function AboutMe() {
  return (
    <Container id="aboutMe">
      <FakeHTML className="none" text="<section>" />
      <AboutMeSection>
        <ImgDiv>
          <FakeHTML text="<div>" />
          <img src={myPhoto} alt="João Francisco" />
          <FakeHTML text="</div>" />
        </ImgDiv>
        <AboutMeText>
          <FakeHTML text="<h2>" />
          <h2>João Francisco</h2>
          <FakeHTML text="</h2>" />
          <FakeHTML text="<p>" />
          <p>
            Contador de formação, entusiasta de tecnologias e estudante nato.
            Acredito que "Se alguem foi capaz de escrever do algo tão magnífico
            do absoluto nada, o meu dever é no mínimo entender o que aquele
            sujeito escreveu", Clóvis de Barros Filho.
            <br></br>E pretendo ser esse a pessoa que vai contruir para a
            comunidade e as empresas!
          </p>
          <CTAButton id='contact' href="mailto:joaofrancisco.guarda@gmail.com">
            joaofrancisco.guarda@gmail.com
          </CTAButton>
          <FakeHTML text="</p>" />
        </AboutMeText>
      </AboutMeSection>
      <CTAButton
        href="#techs"
        color="var(--secundary)"
        hoverColor="var(--primary)"
      >
        tecnologias
      </CTAButton>
      <FakeHTML className="none" text="</section>" />
    </Container>
  );
}

export default AboutMe;
