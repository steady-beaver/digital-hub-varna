import { Text } from "components";
import { Link } from "react-router-dom";
import { BookInfoT } from "types";
import { Frame, Tags } from "./FavCard.styled";

const FavCard = (props: BookInfoT) => {
  const { title, authors, year, subjects, id } = props;
  return (
    <Link to={`/book/${id}`} state={{ ...props } as BookInfoT}>
      <Frame>
        <Text>{title}</Text>

        <div>
          <Text variant="light">{authors[0] + " " + year}</Text>
        </div>
        <Tags>
          <Text variant="light">{subjects.join(", ")}</Text>
        </Tags>
      </Frame>
    </Link>
  );
};

export default FavCard;
