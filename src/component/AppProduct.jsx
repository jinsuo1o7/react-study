import { React, useState } from "react";
import Product from "./Product";

export default function AppProduct() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {showProducts && <Product />}
      <div onClick={() => setShowProducts((prev) => !prev)}>SHOW</div>
    </div>
  );
}
