import React, { useState, useEffect } from "react";
import "./css/packageTab.css";
import Footer from "../js/footer";
import ArtComponent from "./artComponent/js/artComponent";
import axios from "axios";

function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    settingData();
  }, []);
  const settingData = async () => {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8080/visualList",
    });

    setList(data);
  };

  const setPackageList = () => {
    //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <ArtComponent productName={data.productName} krName={data.krName} />
      </div>
    ));
    return <div id="artComponent-component">{listTmp}</div>;
  };
  return (
    <div className="package-main-div">
      <div className="row" id="head">
        <div className="col-8" id="head-title-line">
          <div className="justify-content-end">
            <p id="head-title">CRAFT</p>
          </div>
        </div>
        <div className="col-4" id="head-title-sub-container">
          <p id="head-title-sub">패키지 디자인</p>
        </div>
      </div>
      <div id="artComponent-container">{setPackageList()}</div>
      <Footer />
    </div>
  );
}

export default App;
