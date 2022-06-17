import { useState } from "react";
import Header from "./components/layout/header";
import "./index.css";
import Meals from "./components/ui/meals";
import Cart from "./components/cart/cart";

function App() {
  const [cartState, setCart] = useState(false);
  const openCart = () => {};

  return (
    <>
      {!cartState && <Cart />}
      <Header></Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
