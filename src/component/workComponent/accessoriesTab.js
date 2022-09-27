import React, { useState, useEffect } from "react";
import "./css/accessoriesTab.css";
import Footer from "../js/footer";
import ArtComponent from "./artComponent/js/artComponent";
import axios from "axios";

function App() {
    const [names,setNames] = useState([]);

    const [list, setList] = useState([]);
    useEffect(() => {
      settingData();
    }, []);
    const settingData = async () => {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:8080/craftList",
      });
  
      setList(data);
    };
    
    const setAccessoriesList = () => { //Single component
      const listTmp = list.map((data, index) => (
        <div key={data.krName}>
          <ArtComponent productName={data.productName} krName={data.krName} />
        </div>
      ));
      return <div id="artComponent-component">{listTmp}</div>;
    }
  return (
    <div className="accessories-main-div">
      <div className="row" id="head">
        <div className="col-8" id='head-title-line'>
          <p id="head-title">CRAFT</p>
        </div>
        <div className="col-4" id='head-title-sub-container'>
          <p id="head-title-sub">장신구 디자인</p>
        </div>
      </div>
        <div id="artComponent-container">
            {setAccessoriesList()}
        </div>
      <Footer />
    </div>
  );
}

export default App;
