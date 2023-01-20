import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, NavBarStyled } from "../styles/Index";

const Navbar = () => {
  return (
    <NavBarStyled>
      <header>
        <Container>
          <ul>
            <li>
              <NavLink to="/usestate">useState</NavLink>
            </li>
            <li>
              <NavLink>useEffect</NavLink>
            </li>
            <li>
              <NavLink>useReduser</NavLink>
            </li>
            <li>
              <NavLink>useContext</NavLink>
            </li>
            <li>
              <NavLink>useCollback and Memo</NavLink>
            </li>
            <li>
              <NavLink>Кастомный хук</NavLink>
            </li>
            <li>
              <NavLink>redux toolkit</NavLink>
            </li>
          </ul>
        </Container>
      </header>
      <Container>
       
        <Outlet />
      </Container>
    </NavBarStyled>
  );
};

export default Navbar;
