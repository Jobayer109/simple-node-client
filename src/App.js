import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email }
    console.log(user)
    e.target.reset("")
}








  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <div>
        <form onSubmit={handleForm} className="form">
          <input type="text" name="name" id="" placeholder="name" /> <br />
          <input type="email" name="email" id="" placeholder="email" /> <br />
          <button type="submit">Submit</button>
        </form>
        <h2>Users: {users.length}</h2>
      </div>
      <>
        {users.map((user) => (
          <p key={user.id}>
            {user.name} {user.email}
          </p>
        ))}
      </>
    </div>
  );
}

export default App;
