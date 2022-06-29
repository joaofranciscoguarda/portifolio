import { Link } from "react-router-dom";
import useScrollDirection from "../../../hooks/useScrollDirection";
import Burger from "../../BurgerIcon";
import MobileNavBar from "./MobileNavBar";
import { Container, SpanLogo } from "./styles";

function Header({ openNavBar, setOpenNavBar }) {
  const scrollDirection = useScrollDirection("down");

  return (
    <Container scrollDirection={scrollDirection}>
      <Link to="#">
        <SpanLogo>{"<João F/>"}</SpanLogo>
      </Link>
      <Burger color='var(--primary)' open={openNavBar} setOpen={setOpenNavBar} />
      <MobileNavBar open={openNavBar} setOpen={setOpenNavBar} />
    </Container>
  );
}

export default Header;
