import { BookRecord, SearchInput } from "components";
import { PAGE_SIZE } from "configs";
import { getExcerpt, useDebounce } from "helpers";
import { useBookSearch } from "queries";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { BookInfoT } from "types";
import { Main } from "./Search.styled";

const Search = () => {
  const [query, setQuery] = useState("");
  const { ref, inView } = useInView();

  const debouncedQuery = useDebounce(query, 500);
  const { data, fetchNextPage, hasNextPage } = useBookSearch(debouncedQuery);

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log("Fire !");
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  const content = data?.pages.map((page, pageIndex) =>
    page?.docs.map((book: any, itemIndex: number) => {
      const currentIndex = pageIndex * PAGE_SIZE + itemIndex + 1;
      const currentLastIndex =
        (data.pages.length - 1) * PAGE_SIZE +
        data.pages[data.pages.length - 1]?.docs.length;

      const bookInfo: BookInfoT = {
        title: book.title,
        id: book.key.split("/").pop(),
        authors: book?.author_name ?? ["Unknown"],
        year: book.first_publish_year,
        publisher: book.publisher[0],
        subjects: book.subject,
        excerpt: getExcerpt(),
      };

      return (
        <BookRecord
          key={bookInfo.id}
          index={currentIndex}
          innerRef={currentIndex === currentLastIndex ? ref : undefined}
          // key into bookInfo
          {...bookInfo}
        />
      );
    })
  );

  console.log("data: ", data);

  return (
    <Main>
      <SearchInput value={query} onChange={handleSearch} />
      <div>{content}</div>
      {hasNextPage && <div>Loading...</div>}
    </Main>
  );
};

export default Search;
