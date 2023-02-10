import React, { useEffect } from "react";
import { useState } from "react";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handelChange = () => {
    setChecked((prev) => !prev);
  };

  useEffect(() => {
    fetch(`/data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((res) => setProducts(res));

    return () => {
      console.log("반환 함수");
    };
  }, [checked]);

  return (
    <div>
      <label htmlFor="checkBox">Sale Product</label>
      <input
        id="checkBox"
        type="checkbox"
        value={checked}
        onChange={handelChange}
      />
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>
            {product.name}
            {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
