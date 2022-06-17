import { useState } from "react";
import Modal from "../layout/modal";
import PrimaryButton from "../layout/buttons/primaryButton";
import CloseButton from "../layout/buttons/closeButton";
import ReactDOM from "react-dom";

export default function Cart(props) {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 13.99 }].map(
    (e) => {
      <li>{e.name}</li>;
    }
  );

  const [items, setItems] = useState(cartItems);

  return ReactDOM.createPortal(
    <Modal>
      <ul>{items}</ul>
      <div className="flex justify-between border border-x-[#fff] border-t-[#fff] pb-3 border-b-[#00000012]">
        <p className="font-bold text-base">Total</p>
        <h1 className="font-light text-2xl">$35.92</h1>
      </div>
      <div className="flex justify-end gap-3">
        <CloseButton name="Close" />
        <PrimaryButton name="Checkout" />
      </div>
    </Modal>,
    document.getElementById("modal")
  );
}
