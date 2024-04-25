import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import Login from "./pages/Login";
const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route exact path="/posts/:id" element={<PostIdPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
};
export default AppRouter;
