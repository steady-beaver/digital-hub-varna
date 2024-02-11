import { Navigation, PrivateRoutes } from "navigation";
import { DetailedView } from "pages/DetailedView";
import { Favorite } from "pages/Favorite";
// import SignInZod from "pages/Registration/SignInZod";
import SignIn from "pages/Registration/SignIn";
import SignUp from "pages/Registration/SignUp";
import { Search } from "pages/Search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/signin" element={<SignInZod />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<Navigation />}>
            <Route path="/" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/book/:id" element={<DetailedView />} />
          </Route>
        </Route>
        <Route path="*" element={<div>Invalid route</div>} />
      </Routes>
    </>
  );
}

export default App;
