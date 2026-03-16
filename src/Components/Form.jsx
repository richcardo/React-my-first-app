import { useState } from "react";
export default function Form() {
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
  return (
    <>
      <form onSubmit={sumbmitHandler}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <button type="submit">Submit</button>
      </form>
      {isVisible && (
        <div className="card">
          <h2>{formData.name}</h2>
          <p>{formData.email}</p>
        </div>
      )}
    </>
  );
}
