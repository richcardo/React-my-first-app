import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Routes, Route, BrowserRouter } from "react-router";
import Layout from "./Layout/Layout.jsx";
import Posts from "./Components/Posts.jsx";
import PostDetail from "./Components/PostDetail.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
