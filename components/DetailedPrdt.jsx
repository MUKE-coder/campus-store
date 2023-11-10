import React from "react";
import Product from "./Product";

export default function DetailedPrdt({ data }) {
  return (
    <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item, i) => {
        return <Product product={item} key={i} />;
      })}
    </div>
  );
}
