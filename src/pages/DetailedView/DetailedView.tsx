import { ReactComponent as HeartEmpty } from "assets/heart-empty-2.svg";
import { ReactComponent as HeartFull } from "assets/heart-full-2.svg";
import { TwoSidedLayout } from "components";
import { useLocation } from "react-router-dom";
import { BookInfoT } from "types";

import { useGlobalContext } from "context";
import {
  Authors,
  Except,
  FavoriteIconWrapper,
  Main,
  Publisher,
  Tags,
  Title,
  Year,
} from "./DetailedView.styles";

const DetailedView = () => {
  const { state, key } = useLocation();
  const { title, authors, publisher, year, subjects, excerpt, id } =
    state as BookInfoT;
  console.log("state: ", state);
  console.log("key: ", key);
  console.log("HERE");

  const titleContainer = { flexGrow: 1, marginLeft: "50px" };
  const { getIsFavorite, removeBook, addBook } = useGlobalContext();

  return (
    <Main>
      <TwoSidedLayout>
        <TwoSidedLayout.Left styles={titleContainer}>
          <Title>{title}</Title>
        </TwoSidedLayout.Left>
        <TwoSidedLayout.Right>
          <FavoriteIconWrapper
            onClick={() =>
              getIsFavorite(id) ? removeBook(id) : addBook(state)
            }
          >
            {getIsFavorite(id) ? <HeartFull /> : <HeartEmpty />}
          </FavoriteIconWrapper>
        </TwoSidedLayout.Right>
      </TwoSidedLayout>
      <Authors>{authors.join(", ")}</Authors>
      <TwoSidedLayout>
        <TwoSidedLayout.Left>
          <Publisher>{publisher}</Publisher>
        </TwoSidedLayout.Left>
        <TwoSidedLayout.Right>
          <Year>{year}</Year>
        </TwoSidedLayout.Right>
      </TwoSidedLayout>
      <Except>{excerpt}</Except>
      <Tags>{subjects.join(", ")}</Tags>
    </Main>
  );
};

export default DetailedView;
