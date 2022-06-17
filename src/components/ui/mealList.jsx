import Card from "./card";
import Meal from "./meal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function MealList() {
  let mealItems = DUMMY_MEALS.map((e) => (
    <Meal
      key={e.id}
      name={e.name}
      description={e.description}
      price={e.price}
    />
  ));
  return (
    <Card>
      <ul className="text-center">{mealItems}</ul>
    </Card>
  );
}
