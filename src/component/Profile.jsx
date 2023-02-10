import { React } from "react";

export default function Profile({ name, age, newUser }) {
  return (
    <>
      <div className="prfile">
        <h1>Hello {name}</h1>
        <p>Age :{age}</p>
        {newUser && <div>is New User</div>}
      </div>
    </>
  );
}
