import axios from "axios";
import { PAGE_SIZE } from "configs";

const getBookSearch = (query: string, pageParam: number) => {
  return axios
    .get(
      `https://openlibrary.org/search.json?q=${query}&page=${pageParam}&limit=${PAGE_SIZE}`
    )
    .then((res) => res.data);
};

export default getBookSearch;
