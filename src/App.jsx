import { useContext, useState } from "react";
import React from "react";
import Header from "./components/layout/header";
import "./index.css";
import Meals from "./components/ui/meals";
import Cart from "./components/cart/cart";
import CartContext from "./helpers/cartContext";
import CartProvider from "./helpers/cartProvider";

function App() {
  const openCart = () => {
    setCart(true);
  };
  const closeCart = () => {
    setCart(false);
  };

  const [cartLoginState, setCart] = useState(false);

  const data = {
    state: cartLoginState,
    open: openCart,
    close: closeCart,
  };

  return (
    <CartProvider>
      <CartContext.Provider value={data}>
        {data.state && <Cart />}
        <Header></Header>
        <main>
          <Meals />
        </main>
      </CartContext.Provider>
    </CartProvider>
  );
}

export default App;
