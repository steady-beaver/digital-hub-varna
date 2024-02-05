import { Navigation } from "navigation";
import { Book } from "pages/Book";
import { Search } from "pages/Search";
import { WishList } from "pages/WishList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">HI</div>
      <Navigation />
      <Routes>
        <Route path="/" element={<WishList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </>
  );
}

export default App;
