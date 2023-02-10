import React from "react";
import { useState } from "react";

export default function Mouse() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <>
      <div
        onPointerMove={(e) =>
          setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }))
        }
      ></div>
      <div style={{ transform: `translate(${position.x}px)` }}></div>
    </>
  );
}
