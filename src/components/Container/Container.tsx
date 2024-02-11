import styled from "styled-components";
import { theme } from "styles";
import device from "styles/mediaQueries";

const Container = styled.main`
  margin: ${theme.spacing[5]} auto;
  max-width: 800px;

  @media ${device.tablet} {
    width: 80vw;
  }

  @media ${device.mobile} {
    width: 100vw;
    padding: 0 ${theme.spacing[3]};
  }
`;

export default Container;
