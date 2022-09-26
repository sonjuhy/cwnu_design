import React, { useState, useEffect } from "react";
import "./css/accessoriesTab.css";
import Footer from "../js/footer";
import ArtComponent from "./artComponent/js/artComponent";

function App() {
    const [names,setNames] = useState([]);

    const data = [
      {krName: "content21", productName: "product1"},
      {krName: "content22", productName: "product2"},
      {krName: "content23", productName: "product3"},
      {krName: "content24", productName: "product4"},
      {krName: "content25", productName: "product5"},
      {krName: "content26", productName: "product6"},
      {krName: "content27", productName: "product7"},
      {krName: "content28", productName: "product8"},
      {krName: "content29", productName: "product9"},
    ];

    useEffect(() => {
        /**
         * axios.get
         */
    },[]);
    const setAccessoriesList = () => { //Single component
      const listTmp = data.map((data, index) => (
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
