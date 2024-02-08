import { Navigation } from "navigation";
import { DetailedView } from "pages/DetailedView";
import { Search } from "pages/Search";
import { WishList } from "pages/WishList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<WishList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<DetailedView />} />
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </>
  );
}

export default App;
