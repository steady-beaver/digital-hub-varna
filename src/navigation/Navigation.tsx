import { ReactComponent as Logo } from "assets/HeidelbergMaterials.svg";
import { ReactComponent as Hamburger } from "assets/hamburger.svg";
import { Text } from "components";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Frame,
  MobileMenuIcon,
  StyledLi,
  StyledNav,
} from "./Navigation.styled";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    console.log("MENU toggle", isMobileMenuOpen);
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Frame>
        <Logo height="80px" />
        <StyledNav $isMobileMenuOpen={isMobileMenuOpen}>
          <ul>
            <StyledLi>
              <NavLink to="/">
                <Text $variant="accent">Favorite</Text>
              </NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink to="/search">
                <Text $variant="accent">Search</Text>
              </NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink to="/singout" onClick={() => navigate(0)}>
                <Text $variant="accent"> Log out </Text>
              </NavLink>
            </StyledLi>
          </ul>
        </StyledNav>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <Hamburger />
        </MobileMenuIcon>
      </Frame>
      <Outlet />
    </>
  );
};

export default Navigation;
