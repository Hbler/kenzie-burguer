import { EventBtn } from "../Global/themeBtns";
import { ThemeCart, ThemeCartCard } from "../Global/themeComponents";

export default function Cart({
  products,
  cart,
  productsInCart,
  setProductsInCart,
  mode,
}) {
  const removeFromCart = (id) => {
    cart[id] > 1 ? (cart[id] -= 1) : delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));

    setProductsInCart(
      Object.keys(cart).map((id) => products.find((obj) => obj.id === +id))
    );
  };

  const emptyCart = () => {
    productsInCart.forEach((obj) => delete cart[obj.id]);
    localStorage.setItem("cart", JSON.stringify(cart));

    setProductsInCart(
      Object.keys(cart).map((id) => products.find((obj) => obj.id === +id))
    );
  };

  return (
    <ThemeCart mode={mode}>
      <div className="head">
        <h3>Carrinho de compras</h3>
      </div>
      <div className="container" mode={mode}>
        {productsInCart.length === 0 ? (
          <div className="empty">
            <h3>Seu carrinho está vazio</h3>
            <p>Adicione itens</p>
          </div>
        ) : (
          <>
            <div className="list">
              {productsInCart.length > 0 &&
                productsInCart.map((product) => {
                  return (
                    <ThemeCartCard key={product.id} mode={mode}>
                      <figure>
                        <img src={product.img} alt="" />
                      </figure>
                      <div>
                        <h4>{product.name}</h4>
                        <small>{product.category}</small>
                        <small>x{cart[product.id]}</small>
                      </div>
                      <small
                        onClick={() => {
                          removeFromCart(product.id);
                        }}
                      >
                        remover
                      </small>
                    </ThemeCartCard>
                  );
                })}
            </div>
            <div className="total" mode={mode}>
              <div>
                <p>Total:</p>
                <p>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(
                    productsInCart.reduce(
                      (total, obj) => total + obj.price * cart[obj.id],
                      0
                    )
                  )}
                </p>
              </div>
              <EventBtn mode={mode} btnColor={"gray"} onClick={emptyCart}>
                Esvaziar Carrinho
              </EventBtn>
            </div>
          </>
        )}
      </div>
    </ThemeCart>
  );
}
