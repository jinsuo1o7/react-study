import React from "react";
import { useState } from "react";

export default function ChildCount({ total, onClick }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        {count} / {total}
      </p>
      <div
        onClick={() => {
          setCount(count + 1);
          onClick();
        }}
      >
        Add
      </div>
    </div>
  );
}
