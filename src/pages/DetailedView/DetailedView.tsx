import { ReactComponent as HeartFull } from "assets/heart-full-2.svg";
import { TwoSidedLayout } from "components";
import { useLocation } from "react-router-dom";
import { BookInfoT } from "types";

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
  const { title, authors, publisher, year, subjects, excerpt } =
    state as BookInfoT;
  console.log("state: ", state);
  console.log("key: ", key);
  console.log("HERE");

  const titleContainer = { flexGrow: 1, marginLeft: "50px" };

  return (
    <Main>
      <TwoSidedLayout>
        <TwoSidedLayout.Left styles={titleContainer}>
          <Title>{title}</Title>
        </TwoSidedLayout.Left>
        <TwoSidedLayout.Right>
          <FavoriteIconWrapper>
            <HeartFull />
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
