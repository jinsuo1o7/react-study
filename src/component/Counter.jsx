import React, { useState } from "react";
import ChildCount from "./ChildCount";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <ChildCount total={count} onClick={handleClick} />
      <ChildCount total={count} onClick={handleClick} />
    </div>
  );
}
