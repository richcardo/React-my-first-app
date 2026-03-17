/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
export default function LoadingData() {

  const [trigger, setTrigger] = useState(false);
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const GetData = async () => {
    setIsLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setTimeout(() => {
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (trigger) {
      GetData();
    }
  }, [trigger]);
  
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <button onClick={() => setTrigger(true)}>Load data</button>
      <ul>
        {users &&
          users.map((user) => {
            return (
              <>
                <li>{user.name}</li>
                <li>{user.email}</li>
              </>
            );
          })}
      </ul>
    </>
  );
}
