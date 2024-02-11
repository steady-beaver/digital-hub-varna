import { useInfiniteQuery } from "@tanstack/react-query";
import { getBookSearch } from "api";
import { PAGE_SIZE } from "configs";

const useBookSearch = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["book", query],
    queryFn: ({ pageParam }) => getBookSearch(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const currentLastIndex =
        (allPages.length - 1) * PAGE_SIZE + lastPage?.docs.length;
      const lastIndex = lastPage.numFound;
      return lastIndex !== currentLastIndex ? allPages.length + 1 : null;
    },
  });
};

export default useBookSearch;
