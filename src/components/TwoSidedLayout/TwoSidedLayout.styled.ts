// @ts-nocheck
import styled from "styled-components";

type Props = {
  $styles?: object;
};

export const LeftRightContainer = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${({ $styles }) => $styles}
`;

export const SideFrame = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $styles }) => $styles}
`;
