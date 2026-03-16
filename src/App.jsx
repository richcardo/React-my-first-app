import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import List from "./Components/List";

function App() {
  const list = ["React", "Vue", "Angular"];
  return (
    <>
      <Navbar />
      <Header title="Welcome to React" />
      <List list={list} />
      <h1 className="title">Welcome to React</h1>
      <label htmlFor="search">search</label>
      <input id="search" type="text" className="input" />
    </>
  );
}

export default App;
