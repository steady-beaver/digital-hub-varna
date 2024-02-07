import { BookRecord } from "components";
import { PAGE_SIZE } from "configs";
import { useDebounce } from "helpers";
import { useBookSearch } from "queries";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const Search = () => {
  const [query, setQuery] = useState("");
  const { ref, inView } = useInView();

  const debouncedQuery = useDebounce(query, 500);
  const { data, fetchNextPage, status, hasNextPage } =
    useBookSearch(debouncedQuery);

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

      return (
        <BookRecord
          key={book.key}
          index={currentIndex}
          innerRef={currentIndex === currentLastIndex ? ref : undefined}
        >
          {book.title}
        </BookRecord>
      );
    })
  );

  console.log("data: ", data);

  return (
    <>
      <input type="text" value={query} onChange={handleSearch} />
      <div>Search</div>
      <div>{content}</div>
      {hasNextPage && <div>Loading...</div>}
    </>
  );
};

export default Search;
