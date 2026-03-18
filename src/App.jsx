import "./App.css";
import Navbar from "./Components/Navbar";



function App() {
  return (
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
}

export default App;
