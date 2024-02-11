import { Container, FavCard } from "components";
import { useGlobalContext } from "contexts/GlobalContext";
import { Grid } from "./Favorite.styled";

const Favorite = () => {
  const { favoriteBooks } = useGlobalContext();
  console.log("favoriteBooks: ", favoriteBooks);

  return (
    <Container>
      <Grid>
        {favoriteBooks.map((book) => (
          <FavCard key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
};

export default Favorite;
