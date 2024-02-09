import { Text } from "components";
import { Link } from "react-router-dom";
import { BookInfoT } from "types";
import { Content, Counter, Frame, Title, Year } from "./BookRecord.styled";

type Props = BookInfoT & {
  index: number;
  innerRef?: React.Ref<HTMLDivElement>;
};

const BookRecord = (props: Props) => {
  const { index, innerRef, title, authors, year, ...rest } = props;
  console.log("props: ", props);
  return (
    <Frame ref={innerRef}>
      <Counter>{index}</Counter>
      <Content>
        <Link
          to={`/book/${rest.id}`}
          state={{ title, authors, year, ...rest } as BookInfoT}
        >
          <Title>{title}</Title>
        </Link>
        <Text variant="light">
          {authors.map((author) => (
            <span key={author}>{author}</span>
          ))}
        </Text>
        <Year>
          <Text variant="light">{year}</Text>
        </Year>
      </Content>
    </Frame>
  );
};

export default BookRecord;
