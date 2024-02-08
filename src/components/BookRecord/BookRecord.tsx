import { Link } from "react-router-dom";
import { BookInfoT } from "types";
import { Content, Counter, Frame } from "./BookRecord.styled";

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
          <div className="title">{title}</div>
        </Link>
        <div className="author">
          {authors.map((author) => (
            <span key={author}>{author}</span>
          ))}
        </div>
        <div className="year">
          <span>{year}</span>
        </div>
      </Content>
    </Frame>
  );
};

export default BookRecord;
