import React, { useState } from "react";
import FakeHTML from "../../FakeHTML";
import Header from "../header";
import { ApresentationText, Container } from "./styles";
import Typewriter from "typewriter-effect";
import CTAButton from "../../CTAButton";

function Apresentation({ language }) {
  const [openBurguer, setOpenBurguer] = useState(false);
  console.log(openBurguer);

  const textPortuguese = [
    "Olá,",
    "me chamo",
    "João Francisco!",
    "Desenvolvedor Web",
  ];
  const textStacks = [" Full Stack!", " Front-End!", " Back-End!"];

  const [text, setText] = useState(textPortuguese);

  return (
    <Container id="Hero" openMobile={openBurguer}>
      <div>
        <Header openNavBar={openBurguer} setOpenNavBar={setOpenBurguer} />
      </div>
      <FakeHTML text="<html>" />
      <FakeHTML text="<body>" />
      <ApresentationText>
        <h1>
          <FakeHTML text="<h1>" />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(text[0])
                .typeString("<br/>")
                .typeString(text[1])
                .typeString("<br/>")
                .typeString(text[2])
                .start();
            }}
            options={{ cursor: "" }}
          />
          <FakeHTML text="</h1>" />
        </h1>
        <p>
          <FakeHTML text="<p>" />
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Sou ")
                .typeString(text[3])
                .typeString(textStacks[0])
                .pauseFor(3000)
                .deleteChars(12)
                .typeString(textStacks[1])
                .pauseFor(3000)
                .deleteChars(11)
                .typeString(textStacks[2])
                .pauseFor(3000)
                .deleteChars(10)
                .start();
            }}
            options={{ loop: true, cursor: "" }}
          />
          <FakeHTML text="</p>" />
        </p>
      </ApresentationText>
      <CTAButton
        className="goToAboutMe"
        href="#aboutMe"
        color={"var(--primary)"}
        hoverColor={"var(--secundary)"}
      >
        Sobre mim
      </CTAButton>
    </Container>
  );
}

export default Apresentation;
