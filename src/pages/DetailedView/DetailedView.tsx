import { ReactComponent as HeartEmpty } from "assets/heart-empty-2.svg";
import { ReactComponent as HeartFull } from "assets/heart-full-2.svg";
import { TwoSidedLayout } from "components";
import { useLocation } from "react-router-dom";
import { BookInfoT } from "types";

import { Text } from "components";
import { useGlobalContext } from "contexts/GlobalContext";
import { theme } from "styles";
import { FavoriteIconWrapper, Main } from "./DetailedView.styled";

const DetailedView = () => {
  const { state } = useLocation();
  const { title, authors, publisher, year, subjects, excerpt, id } =
    state as BookInfoT;

  const titleContainer = {
    flexGrow: 1,
    marginLeft: "50px",
    color: `${theme.colors.green.dark}`,
    textAlign: "center",
    "@media (max-width: 500px)": {
      marginLeft: "0",
    },
  };

  const twoSidedLayoutMobile = {
    "@media (max-width: 500px)": {
      flexDirection: "column-reverse",
      gap: `${theme.spacing[2]}`,
    },
  };

  const { getIsFavorite, removeBook, addBook } = useGlobalContext();

  return (
    <Main>
      <TwoSidedLayout style={twoSidedLayoutMobile}>
        <TwoSidedLayout.Left style={titleContainer}>
          <Text $variant="h1">{title}</Text>
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
      <Text $variant="italic">{authors.join(", ")}</Text>
      <TwoSidedLayout style={twoSidedLayoutMobile}>
        <TwoSidedLayout.Left>
          <Text>{publisher}</Text>
        </TwoSidedLayout.Left>
        <TwoSidedLayout.Right>
          <Text>{year}</Text>
        </TwoSidedLayout.Right>
      </TwoSidedLayout>
      <Text>{excerpt}</Text>
      <Text>{subjects.join(", ")}</Text>
    </Main>
  );
};

export default DetailedView;
