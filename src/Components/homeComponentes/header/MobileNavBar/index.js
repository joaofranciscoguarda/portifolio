import { Ul } from "./styled";
import { useContext } from "react";
import { LanguageContext } from "../../../../Providers/language";
import myphoto from "../../../../imgs/myphoto.png";

function MobileNavBar({ open, setOpen }) {
  const { language} =
    useContext(LanguageContext);

  return (
    <Ul open={open}>
      <li className="profile">
        <a href="#" onClick={() => setOpen(false)}>
          <img src={myphoto} alt="João Francisco" /> João Francisco
        </a>
      </li>
      {language === "en" ? (
        <>
          <li>
            <a href="#aboutMe" onClick={() => setOpen(false)}>
              About me
            </a>
          </li>
          <li>
            <a href="#techs" onClick={() => setOpen(false)}>
              Techs
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={() => setOpen(false)}>
              Contact
            </a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="#aboutMe" onClick={() => setOpen(false)}>
              Sobre mim
            </a>
          </li>
          <li>
            <a href="#techs" onClick={() => setOpen(false)}>
              Tecnologias
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#aboutMe" onClick={() => setOpen(false)}>
              Contato
            </a>
          </li>
        </>
      )}
    </Ul>
  );
}

export default MobileNavBar;
