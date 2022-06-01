import { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { EventBtn } from "../Global/themeBtns";
import { ThemeCard, ThemeMain } from "../Global/themeComponents";
import Cart from "./Cart";

export default function Main({ mode, products, toShow, notify }) {
  const cart = useMemo(
    () => JSON.parse(localStorage.getItem("cart")) || {},
    []
  );

  const [productsInCart, setProductsInCart] = useState([]);
  const [inCart, setInCart] = useState(false);

  const addToCart = (id) => {
    // versão que possibilita adicionar mais do mesmo produto ao cart
    // cart[id] ? (cart[id] += 1) : (cart[id] = 1);

    cart[id] ? setInCart(true) : (cart[id] = 1);
    localStorage.setItem("cart", JSON.stringify(cart));

    setProductsInCart(
      Object.keys(cart).map((id) => products.find((obj) => obj.id === +id))
    );
  };

  useEffect(() => {
    setProductsInCart(
      Object.keys(cart).map((id) => products.find((obj) => obj.id === +id))
    );
  }, [cart, products]);

  useEffect(() => {
    if (inCart) {
      const notify = () => toast.error("O produto já está no carrinho");
      notify();
    }
    return () => {
      setInCart(false);
    };
  }, [inCart]);

  return (
    <ThemeMain mode={mode}>
      <Toaster />
      <div className="container small">
        <div className="display">
          {toShow.map((obj) => (
            <ThemeCard key={obj.id} mode={mode}>
              <figure mode={mode}>
                <img src={obj.img} alt="" />
              </figure>
              <div>
                <h3>{obj.name}</h3>
                <small>{obj.category}</small>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(obj.price)}
                </p>
                <EventBtn
                  btnSize="medium"
                  onClick={() => {
                    addToCart(obj.id);
                  }}
                >
                  Adicionar
                </EventBtn>
              </div>
            </ThemeCard>
          ))}
        </div>
        <Cart
          products={products}
          cart={cart}
          productsInCart={productsInCart}
          setProductsInCart={setProductsInCart}
          mode={mode}
        />
      </div>
    </ThemeMain>
  );
}
