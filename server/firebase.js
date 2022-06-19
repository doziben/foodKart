import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAmy7qByiwfrc_-3_oHvRvn22lO9Z_uGkE",
  authDomain: "react-demo-7b7a3.firebaseapp.com",
  databaseURL: "https://react-demo-7b7a3-default-rtdb.firebaseio.com",
  projectId: "react-demo-7b7a3",
  storageBucket: "react-demo-7b7a3.appspot.com",
  messagingSenderId: "379388346688",
  appId: "1:379388346688:web:645231706544f3be027aa5",
};

const SERVER_APP = initializeApp(firebaseConfig);
const SERVER_DATABASE = getDatabase(SERVER_APP);

export default SERVER_DATABASE;
