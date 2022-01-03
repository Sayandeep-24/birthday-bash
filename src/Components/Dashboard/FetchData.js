import db from "../../firebase-config.js";
import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import DisplayData from "./DisplayData.js";
import Loader from "react-loader-spinner";

function FetchData() {
  const [data, setData] = useState([]);
  
  const [dataArray, setDataArray] = useState();
  const [flag, setFlag] = useState(false);
  var id = [];  
  async function getData() {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      setData((data) => ({
        ...data,
        [doc.id]: doc.data(),
      }));
      id.push(doc.id);
    });
    setFlag(true);
    var newArrayDataOfOjbect = Object.values(data);
    const newArr = newArrayDataOfOjbect.map((v,i) => ({...v, key: id[i]}))
    
    setDataArray(newArr);
  }

  useEffect(() => {
    getData();
  }, [flag, dataArray]);
  return (
    <div>
      {dataArray ? (
        <DisplayData data={dataArray} changer={setDataArray} />
      ) : (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
    </div>
  );
}

export default FetchData;
