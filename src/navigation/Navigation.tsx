import { ReactComponent as Logo } from "assets/HeidelbergMaterials.svg";
import { TwoSidedLayout } from "components";
import { NavLink } from "react-router-dom";
import { theme } from "theme";
import { StyledNav } from "./Navigation.styled";

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
            <li>
              <NavLink to="/">Wish List</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
          </ul>
        </StyledNav>
      </TwoSidedLayout.Left>
      <TwoSidedLayout.Right>
        <b>User</b>
      </TwoSidedLayout.Right>
    </TwoSidedLayout>
  );
};

export default Navigation;
