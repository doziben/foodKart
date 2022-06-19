import React from "react";

const MealContext = React.createContext({
  items: [],
  totalAmount: 0,
  addMeal: (meal) => {},
  removeMeal: (meal) => {},
  clearCart: () => {},
});

export default MealContext;
