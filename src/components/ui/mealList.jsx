import Card from "./card";
import Meal from "./meal";
import Loader from "./loader";
import SERVER_DATABASE from "../../../server/firebase";
import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";

const dataRef = ref(SERVER_DATABASE);

export default function MealList() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    onValue(dataRef, (snapshot) => {
      const response = snapshot.val();
      let data = response.meals;
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(loadedMeals);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  let mealItems = meals.map((e) => (
    <Meal
      key={e.id}
      id={e.id}
      name={e.name}
      description={e.description}
      price={e.price}
    />
  ));
  return (
    <Card>
      {loading && <Loader />}
      {!loading && <ul className="animate-slide text-center">{mealItems}</ul>}
    </Card>
  );
}
