import { ReactComponent as Logo } from "assets/HeidelbergMaterials.svg";
import { Text, TwoSidedLayout } from "components";
import { NavLink } from "react-router-dom";
import { theme } from "theme";
import { StyledLi, StyledNav } from "./Navigation.styled";

const main = {
  height: "136px",
  borderBottom: `${theme.spacing[1]} solid ${theme.colors.green.dark}`,
  padding: `0 ${theme.spacing[5]}`,
};

const Navigation = () => {
  return (
    <TwoSidedLayout styles={main}>
      <TwoSidedLayout.Left>
        <Logo height="80px" />
        <StyledNav>
          <ul>
            <StyledLi>
              <NavLink to="/">
                <Text variant="accent">Favorite</Text>
              </NavLink>
            </StyledLi>
            <StyledLi>
              <NavLink to="/search">
                <Text variant="accent">Search</Text>
              </NavLink>
            </StyledLi>
          </ul>
        </StyledNav>
      </TwoSidedLayout.Left>
      <TwoSidedLayout.Right>
        <Text variant="accent">User</Text>
      </TwoSidedLayout.Right>
    </TwoSidedLayout>
  );
};

export default Navigation;
