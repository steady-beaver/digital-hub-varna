import { LeftRightContainer, SideFrame } from "./TwoSidedLayout.styled";

type Props = {
  children: React.ReactNode;
  styles?: object;
  as?: string;
};

const Side = ({ children, styles, as, ...props }: Props) => (
  <SideFrame $styles={styles} as={as} {...props}>
    {children}
  </SideFrame>
);

const TwoSidedLayout = ({ children, styles, as, ...props }: Props) => {
  return (
    <LeftRightContainer $styles={styles} as={as} {...props}>
      {children}
    </LeftRightContainer>
  );
};

TwoSidedLayout.Left = Side;
TwoSidedLayout.Right = Side;

export default TwoSidedLayout;
