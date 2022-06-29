import { StyledBurger } from "./styled";

function Burger({ open, setOpen, color }) {
  return (
    <StyledBurger color={color} open={open} onClick={() => setOpen(!open)}>
      <div />
      <div className="split">
        <div />
        <div />
      </div>
      <div />
    </StyledBurger>
  );
}

export default Burger;
