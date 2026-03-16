import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import List from "./Components/List";
import Counter from "./Components/Counter";
import Form from "./Components/Form";

function App() {
  const list = ["React", "Vue", "Angular"];
  return (
    <>
      <Navbar />
      <Header title="Welcome to React" />
      <List list={list} />
      <Counter />
      <Form />
    </>
  );
}

export default App;
