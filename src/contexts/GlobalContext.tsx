import React, { useState } from "react";
import { BookInfoT } from "types";
import MOCK_FAVORITES from "./MOCK_FAVORITES.json";

export type GlobalContextT = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  favoriteBooks: BookInfoT[];
  addBook: (book: BookInfoT) => void;
  removeBook: (id: string) => void;
  getIsFavorite: (id: string) => boolean;
};

const GlobalContext = React.createContext<GlobalContextT | null>(null);

export function useGlobalContext() {
  return React.useContext(GlobalContext) as GlobalContextT;
}

type Props = {
  children: React.ReactNode;
};

export function GlobalContextProvider({ children }: Props) {
  const [query, setQuery] = useState("");
  const [favoriteBooks, setFavoriteBooks] = useState<BookInfoT[]>(
    MOCK_FAVORITES as BookInfoT[]
  );

  const addBook = (bookInfo: BookInfoT) => {
    setFavoriteBooks((books) => [...books, bookInfo]);
  };

  const removeBook = (id: string) => {
    setFavoriteBooks((books) => books?.filter((book) => book.id !== id) ?? []);
  };

  const getIsFavorite = (id: string) => {
    return favoriteBooks?.some((book) => book.id === id) ?? false;
  };

  return (
    <GlobalContext.Provider
      value={
        {
          query,
          setQuery,
          favoriteBooks,
          addBook: (book: BookInfoT) => addBook(book),
          removeBook: (id: string) => removeBook(id),
          getIsFavorite: (id: string) => getIsFavorite(id),
        } as GlobalContextT
      }
    >
      {children}
    </GlobalContext.Provider>
  );
}
