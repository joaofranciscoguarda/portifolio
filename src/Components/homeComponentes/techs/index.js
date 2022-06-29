import React from "react";
import FakeHTML from "../../FakeHTML";
import {
  CardsForFakeHtml,
  Container,
  TechsCard,
  TechsItems,
  TechsSection,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faCss3,
  faJsSquare,
  faHtml5,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faSpinner } from "@fortawesome/free-solid-svg-icons";
import CTAButton from "../../CTAButton";
import Typewriter from "typewriter-effect";

function Techs() {
  return (
    <Container id="techs">
      <FakeHTML text="<section>" />
      <TechsSection>
        <CardsForFakeHtml>
          <FakeHTML text="<ul>" />

          <TechsCard color="var(--primary)">
            <h3>Front-End</h3>
            <TechsItems>
              <FontAwesomeIcon icon={faHtml5} />
              <p>HTML</p>
            </TechsItems>
            <TechsItems>
              <FontAwesomeIcon icon={faCss3} />
              <p>CSS</p>
            </TechsItems>
            <TechsItems>
              <FontAwesomeIcon icon={faJsSquare} />
              <p>JavaScript</p>
            </TechsItems>
            <TechsItems>
              <FontAwesomeIcon icon={faReact} />
              <p>React</p>
            </TechsItems>
          </TechsCard>

          <FakeHTML text="</ul>" />
        </CardsForFakeHtml>

        <CardsForFakeHtml>
          <FakeHTML text="<ul>" />

          <TechsCard color="var(--secundary)">
            <h3>Back-End</h3>
            <TechsItems>
              <FontAwesomeIcon icon={faDocker} />
              <p>Docker</p>
            </TechsItems>
            <TechsItems>
              <FontAwesomeIcon icon={faDatabase} />
              <p>SQL</p>
            </TechsItems>
            <TechsItems>
              <FontAwesomeIcon icon={faSpinner} />
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Aprendendo!').start()
                }}
              />
            </TechsItems>
          </TechsCard>

          <FakeHTML text="</ul>" />
        </CardsForFakeHtml>
      </TechsSection>

      <CTAButton
        href="#skills"
        hoverColor="var(--secundary)"
        color="var(--primary)"
      >
        Soft Skills
      </CTAButton>
      <FakeHTML text="</section>" />
    </Container>
  );
}

export default Techs;
