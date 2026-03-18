import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./Layout/Layout";
import Posts from "./Components/Posts";
import PostDetail from "./Components/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
