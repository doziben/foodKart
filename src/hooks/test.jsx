import useGet from "./use-Get";

export default function Test() {
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

  const [AppData, loading] = useGet(dataHandler);

  return (
    <div>
      TEST HOOK
      <button onClick={buttonHandler}>Test Hook</button>
    </div>
  );
}
