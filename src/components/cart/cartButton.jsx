import { useContext, useEffect, useState } from "react";
import CartIcon from "../layout/cartIcon";
import MealContext from "../../helpers/mealContext";
import "./custom.css";

export default function CartButton(props) {
  const mealState = useContext(MealContext);
  const numberOfMeals = mealState.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  let count = numberOfMeals;
  count == null ? (count = "0") : (count = numberOfMeals);

  const { items } = mealState;
  const [bump, setBump] = useState(false);

  useEffect(() => {
    !(mealState.items.length === 0) && setBump(true);

    const timer = setTimeout(() => {
      setBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const classes = `${
    bump && "bump"
  } rounded-3xl bg-[#191A1C52] text-[white] flex gap-3 p-2 items-center`;
  return (
    <button onClick={props.onClick} className={classes}>
      <span>
        <CartIcon />
      </span>
      <span className="font-bold">
        <p>Your Cart</p>
      </span>
      <span className="px-3 py-3 text-xs bg-sec rounded-3xl">
        <p>{count}</p>
      </span>
    </button>
  );
}
