import { useContext, useState } from "react";
import Modal from "../layout/modal";
import PrimaryButton from "../layout/buttons/primaryButton";
import CloseButton from "../layout/buttons/closeButton";
import CartContext from "../../helpers/cartContext";
import ReactDOM from "react-dom";
import MealContext from "../../helpers/mealContext";
import CartItem from "./CartItem";
import Checkout from "./checkout";
import SERVER_DATABASE from "../../../server/firebase";
import { getDatabase, ref, set } from "firebase/database";
import "./custom.css";

export default function Cart() {
  const cartState = useContext(CartContext);
  const ctx = useContext(MealContext);
  const [isCheckout, setIsCheckout] = useState(false);

  const checkoutHandler = () => {
    setIsCheckout((prevState) => {
      return !prevState;
    });
  };

  const cartAddHandler = (e) => {
    ctx.addMeal({ ...e, amount: 1 });
  };
  const cartRemoveHandler = (id) => {
    ctx.removeMeal(id);
  };

  const submitOrderHandler = (userData) => {
    set(ref(SERVER_DATABASE, `orders/${userData.name}`), {
      name: userData.name,
      orderedMeals: ctx.items,
    })
      .then(() => {
        setTimeout(() => {
          checkoutHandler();
          ctx.clearCart();
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cartItems = ctx.items.map((e) => {
    return (
      <CartItem
        key={e.id}
        name={e.name}
        amount={e.amount}
        price={e.price}
        onRemove={cartRemoveHandler.bind(null, e.id)}
        onAdd={cartAddHandler.bind(null, e)}
      />
    );
  });

  const itemsPage = (
    <>
      {" "}
      <ul className="max-h-[20rem] overflow-y-scroll custom">{cartItems}</ul>
      <div className="flex justify-between border border-x-[#fff] border-t-[#fff] pb-3 border-b-[#00000012]">
        <p className="font-bold text-base">Total</p>
        <h1 className="font-light text-2xl">{`$${ctx.totalAmount.toFixed(
          2
        )}`}</h1>
      </div>
    </>
  );
  const showModalFooter = ctx.items.length > 0;

  return ReactDOM.createPortal(
    <Modal>
      {!isCheckout && itemsPage}
      {isCheckout && <Checkout onSubmit={submitOrderHandler} />}
      <div className="flex justify-end gap-3">
        <CloseButton onClick={cartState.close} name="Close" />
        {showModalFooter && !isCheckout && (
          <PrimaryButton name="Checkout" onClick={checkoutHandler} />
        )}
      </div>
    </Modal>,
    document.getElementById("modal")
  );
}
