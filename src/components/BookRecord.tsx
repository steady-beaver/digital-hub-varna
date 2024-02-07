import { Counter, Frame } from "./BookRecord.styled";

type Props = {
  index: number;
  children: JSX.Element;
  innerRef?: React.Ref<HTMLDivElement>;
};

const BookRecord = ({ index, innerRef, children }: Props) => {
  return (
    <Frame ref={innerRef}>
      <Counter>{index}</Counter>
      {children}
    </Frame>
  );
};

export default BookRecord;
