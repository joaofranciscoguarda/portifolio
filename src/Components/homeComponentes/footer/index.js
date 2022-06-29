import React from "react";
import { Container, DivForFakeHtml, IconsDiv, InfoDiv } from "./styles";
import FakeHTML from "../../FakeHTML";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container id="footer">
      <DivForFakeHtml>
        <FakeHTML text="</body>" />
        <FakeHTML text="</html>" />
      </DivForFakeHtml>
      <InfoDiv>
        <IconsDiv>
          <a href='https://www.instagram.com/joao_franciscojf/' >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com/in/joao-francisco-guarda-pozzer/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/joaofranciscoguarda'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </IconsDiv>
        Construido por João Francisco - 2022
      </InfoDiv>
    </Container>
  );
}

export default Footer;
