import { Navigation } from "navigation";
import { DetailedView } from "pages/DetailedView";
import { Favorite } from "pages/Favorite";
import { Search } from "pages/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<DetailedView />} />
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </>
  );
}

export default App;
