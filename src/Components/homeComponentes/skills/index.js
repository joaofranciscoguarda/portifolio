import {
  faBugSlash,
  faCalendarCheck,
  faPeopleGroup,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CTAButton from "../../CTAButton";
import FakeHTML from "../../FakeHTML";
import {
  CardsForFakeHtml,
  Container,
  SkillsCard,
  SkillsItems,
  SkillsSection,
} from "./styles";

function Skills() {
  return (
    <Container id="skills">
      <FakeHTML text="<section>" />
      <SkillsSection>
        <CardsForFakeHtml>
          <FakeHTML text="<ul>" />

          <SkillsCard color="var(--primary)">
            <h3>Soft Skills</h3>
            <SkillsItems>
              <FontAwesomeIcon icon={faBugSlash} />
              <p>Aprender a aprender com erros</p>
            </SkillsItems>
            <SkillsItems>
              <FontAwesomeIcon icon={faToolbox} />
              <p>Autonomia</p>
            </SkillsItems>
            <SkillsItems>
              <FontAwesomeIcon icon={faPeopleGroup} />
              <p>Colaborativo e parcitipacito</p>
            </SkillsItems>
            <SkillsItems>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <p>Responsavel e proativo</p>
            </SkillsItems>
          </SkillsCard>

          <FakeHTML text="</ul>" />
        </CardsForFakeHtml>
      </SkillsSection>

      <CTAButton
        href="#projects"
        hoverColor="var(--secundary)"
        color="var(--primary)"
      >
        Projetos
      </CTAButton>
      <FakeHTML text="</section>" />
    </Container>
  );
}

export default Skills;
