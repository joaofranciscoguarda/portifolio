import React from "react";
import {
  ButtonsDiv,
  CardContent,
  CardImage,
  CardProject,
  CardsForFakeHtml,
  Container,
  ProjectsSection,
} from "./styles";
import FakeHTML from "../../FakeHTML";
import CTAButton from "../../CTAButton";

import imgTorreHanoi from "../../../imgs/Captura de tela_2022-06-28_15-41-14.png";
import imgJustHelp from "../../../imgs/Captura de tela_2022-06-28_15-40-22.png";

function Project() {
  return (
    <Container id="projects">
      <FakeHTML text="<section>" />
      <ProjectsSection>
        <CardsForFakeHtml>
          <FakeHTML text="<div>" />
          <CardProject color="var(--primary)" hoverColor="var(--secundary)">
            <CardImage>
              <img src={imgTorreHanoi} alt="Torre de Hanoi" />
            </CardImage>
            <CardContent>
              <h3>Torre de Hanoi</h3>
              <p>
                Um projeto simples feito com apenas HTML, CSS e JavaScript.
                Possui as mesmas regras do jogo original e com seletor de
                dificuldade.
              </p>
              <ButtonsDiv>
                <CTAButton href="https://joaofranciscoguarda.github.io/Torre-de-Hanoi/">
                  View
                </CTAButton>
                <CTAButton href="https://github.com/joaofranciscoguarda/Torre-de-Hanoi">
                  GitHub
                </CTAButton>
              </ButtonsDiv>
            </CardContent>
          </CardProject>
          <FakeHTML text="</div>" />
        </CardsForFakeHtml>

        <CardsForFakeHtml>
          <FakeHTML text="<div>" />
          <CardProject color="var(--primary)" hoverColor="var(--secundary)">
            <CardImage>
              <img src={imgJustHelp} alt="Just Help" />
            </CardImage>
            <CardContent>
              <h3>Just Help</h3>
              <p>
                Um projeto realizado com React e em grupo. Visa fornecer uma
                ferramenta de divulgação de eventos de organizações para
                voluntários participarem.
              </p>
              <ButtonsDiv>
                <CTAButton href="https://justhelp-capstone-m3.vercel.app/">
                  View
                </CTAButton>
                <CTAButton href="https://github.com/lucascortesc/m3-capstone-grupo2">
                  GitHub
                </CTAButton>
              </ButtonsDiv>
            </CardContent>
          </CardProject>
          <FakeHTML text="</div>" />
        </CardsForFakeHtml>
      </ProjectsSection>
        <CTAButton color='var(--secundary)' hoverColor='var(--primary)' id="contact" href="mailto:joaofrancisco.guarda@gmail.com">
            Entre em contato comigo
          </CTAButton>
      <FakeHTML text="</section>" />
    </Container>
  );
}

export default Project;
