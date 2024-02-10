import { Navigation } from "navigation";
import { DetailedView } from "pages/DetailedView";
import { Favorite } from "pages/Favorite";
import SignIn from "pages/Registration/SignIn";
import SignUp from "pages/Registration/SignUp";
import { Search } from "pages/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Favorite />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:id" element={<DetailedView />} />
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </>
  );
}

export default App;
