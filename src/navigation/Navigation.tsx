import { ReactComponent as Logo } from "assets/HeidelbergMaterials.svg";
import { Text, TwoSidedLayout } from "components";
import { useAuth } from "contexts";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { theme } from "styles";
import { StyledLi, StyledNav } from "./Navigation.styled";

const frame = {
  height: "136px",
  borderBottom: `${theme.spacing[1]} solid ${theme.colors.green.dark}`,
  padding: `0 ${theme.spacing[5]}`,
  color: `${theme.colors.green.dark}`,
};

const Navigation = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  console.log("auth Navigation: ", auth);

  return (
    <>
      <TwoSidedLayout style={frame}>
        <TwoSidedLayout.Left>
          <Logo height="80px" />
          <StyledNav>
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
            </ul>
          </StyledNav>
        </TwoSidedLayout.Left>
        <TwoSidedLayout.Right>
          <Text
            style={{
              cursor: "pointer",
            }}
            $variant="accent"
            onClick={() => navigate(0)}
          >
            Log out
          </Text>
        </TwoSidedLayout.Right>
      </TwoSidedLayout>
      <Outlet />
    </>
  );
};

export default Navigation;
