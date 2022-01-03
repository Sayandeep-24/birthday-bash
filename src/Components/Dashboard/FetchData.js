import db from "../../firebase-config.js";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import DisplayData from './DisplayData.js';

function FetchData() {
  const [data, setData] = useState([]);
  const [dataArray,setDataArray] = useState();
  const [flag, setFlag] = useState(false);
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      setData((data) => ({
        ...data,
        [doc.id]: doc.data(),
      }));
    });
    setFlag(true);
    var newArrayDataOfOjbect = Object.values(data)
    setDataArray(newArrayDataOfOjbect)
  }

  useEffect(() => {
    getData();
  }, [flag, dataArray]);
  return (
    <div>
      {dataArray? <DisplayData data={dataArray} /> : null}
    </div>
  );
}

export default FetchData;
