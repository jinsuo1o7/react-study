import React from "react";
import { useState } from "react";

export default function Mentor() {
  const [person, setPerson] = useState({
    name: "sana",
    title: "developer",
    mentor: {
      name: "sans",
      title: "cto",
    },
  });
  return (
    <div>
      <h1>
        {person.name} : {person.title}
      </h1>
      <div>
        {person.name} : {person.mentor.name} is {person.mentor.title}
      </div>
      <button
        onClick={() => {
          const name = prompt("name?");
          setPerson((prev) => ({ ...prev, name }));
        }}
      >
        Change name
      </button>
      <button
        onClick={() => {
          const name = prompt("name?");
          setPerson((prev) => ({
            ...prev,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        Change Mentor name
      </button>
    </div>
  );
}
