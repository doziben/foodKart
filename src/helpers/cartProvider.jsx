import MealContext from "./mealContext";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const updatedAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingItemsIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingItem = state.items[existingItemsIndex];

      let updatedItems;

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingItemsIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }

    case "REMOVE": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );

      const existingItem = state.items[existingCartItemIndex];
      const updatedAmount = state.totalAmount - existingItem.price;

      let updatedItems;

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }
  }
  return defaultCartState;
};

export default function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addItemInCart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemInCart = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addMeal: addItemInCart,
    removeMeal: removeItemInCart,
  };

  return (
    <MealContext.Provider value={context}>
      {props.children}
    </MealContext.Provider>
  );
}
