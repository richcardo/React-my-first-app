import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import List from "./Components/List";
import Counter from "./Components/Counter";
import Form from "./Components/Form";
import { useState } from "react";
import LoadingData from "./Components/LoadingData";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const sumbmitHandler = (e) => {
    e.preventDefault();
    setIsVisible(true);
    setFormData(() => {
      return {
        name: e.target[0].value,
        email: e.target[1].value,
      };
    });
    console.log(formData);
  };
  const list = ["React", "Vue", "Angular"];
  return (
    <>
      <Navbar />
      <Header title="Welcome to React" />
      <List>
         {list.map((item) => {
        return <li key={item}>{item}</li>;
      })}
      </List>
      <Counter />
      <Form sumbmitHandler={sumbmitHandler}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <button type="submit">Submit</button>
        {isVisible && (
          <div className="card">
            <h2>{formData.name}</h2>
            <p>{formData.email}</p>
          </div>
        )}
      </Form>
      <LoadingData />
    </>
  );
}

export default App;
