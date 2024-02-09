import styled from "styled-components";

type Props = {
  variant?: string;
};

const Text = styled.span<Props>`
  ${({ theme, variant }) => theme.typography[variant ? variant : "body"]}
`;

export default Text;
