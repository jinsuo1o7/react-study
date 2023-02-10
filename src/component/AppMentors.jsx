import React from "react";
import { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function Mentor() {
  const [person, dispatch] = useReducer(personReducer, initPerson);

  const handleUpdate = () => {
    const prev = prompt("who?");
    const current = prompt("what?");
    dispatch({ type: "updated", prev, current });
  };

  const handleDelete = () => {
    const name = prompt("who?");
    dispatch({ type: "deleted", name });
  };

  const handleAdd = () => {
    const name = prompt("who?");
    const title = prompt("who?");
    dispatch({ type: "added", name, title });
  };

  return (
    <div>
      <h1>
        {person.name} : {person.title}
      </h1>
      <div>
        {person.mentor.map((mentor, idx) => (
          <div key={idx}>
            {mentor.name} :{mentor.title}
          </div>
        ))}
      </div>
      <button onClick={handleUpdate}>Change name</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

const initPerson = {
  name: "sana",
  title: "developer",
  mentor: [
    {
      name: "sans",
      title: "cto",
    },
    {
      name: "sana",
      title: "cto",
    },
  ],
};
