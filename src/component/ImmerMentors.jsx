import React from "react";
import { useImmer } from "use-immer";
import personReducer from "./reducer/person-reducer";

export default function ImmerMentors() {
  const [person, updatePerson] = useImmer(personReducer, initPerson);

  const handleUpdate = () => {
    const prev = prompt("who?");
    const current = prompt("what?");
    updatePerson((person) => {
      const mentor = person.mentor.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleDelete = () => {
    const name = prompt("who?");
    updatePerson((person) => {
      const idx = person.mentor.findIndex((m) => m.name === name);
      person.mentor.splice(idx, 1);
    });
  };

  const handleAdd = () => {
    const name = prompt("who?");
    const title = prompt("who?");
    updatePerson((person) => {
      person.mentor.push({ name, title });
    });
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
