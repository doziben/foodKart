import Card from "./card";
import Meal from "./meal";
import Loader from "./loader";
import useGet from "../../hooks/use-Get";

export default function MealList() {
  const dataHandler = (data) => {
    const newData = data.meals;
    const loadedData = [];

    for (const key in newData) {
      loadedData.push({
        id: key,
        name: newData[key].name,
        description: newData[key].description,
        price: newData[key].price,
      });
    }

    return loadedData;
  };

  const [meals, loading] = useGet(dataHandler);

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
