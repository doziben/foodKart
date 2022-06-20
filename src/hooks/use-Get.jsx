import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import SERVER_DATABASE from "../../server/firebase";

const dataRef = ref(SERVER_DATABASE);

export default function useGet(parseData) {
  const [AppData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    onValue(dataRef, (snapshot) => {
      const response = snapshot.val();
      let data = response;

      const loadedData = parseData(data);

      loadedData == undefined ? setData(data) : setData(loadedData);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return [AppData, loading];
}
