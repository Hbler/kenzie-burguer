import { useState, useEffect } from "react";

import api from "../Global/api";
import Header from "./Header";
import Main from "./Main";

export default function Ecommerce({ mode, setMode }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    setLoading(true);

    api
      .get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  return (
    <>
      <Header
        mode={mode}
        setMode={setMode}
        products={products}
        setFilter={setFilter}
      />
      {loading || filter.length === 0 ? (
        <div
          style={{
            width: "100%",
            minHeight: "50vh",
            margin: "auto 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: mode === "dark" ? "var(--gray-one)" : "var(--gray--four)",
          }}
        >
          <h1>Carregando...</h1>
        </div>
      ) : (
        <Main mode={mode} products={products} toShow={filter} />
      )}
    </>
  );
}
