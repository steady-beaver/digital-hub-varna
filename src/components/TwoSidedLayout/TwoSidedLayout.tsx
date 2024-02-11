import { LeftRightContainer, SideFrame } from "./TwoSidedLayout.styled";

type Props = {
  children: React.ReactNode;
  style?: object;
  as?: string;
};

const Side = ({ children, style, as, ...props }: Props) => (
  <SideFrame $style={style} as={as} {...props}>
    {children}
  </SideFrame>
);

const TwoSidedLayout = ({ children, style, as, ...props }: Props) => {
  return (
    <LeftRightContainer $style={style} as={as} {...props}>
      {children}
    </LeftRightContainer>
  );
};

TwoSidedLayout.Left = Side;
TwoSidedLayout.Right = Side;

export default TwoSidedLayout;
