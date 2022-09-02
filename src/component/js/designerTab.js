import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/designerTab.css";
import Person from "./designerComponent";

function App() {
  /**
   *
   * get data from db
   */
  const [selected, setSelected] = useState(0);
  const [peopleList, setPeopleList] = useState([]);

  const setPersonList = (e) => {
    const data = [
      "content100",
      "content200",
      "content300",
      "content400",
      "content500",
    ];
    const data1 = ["content1", "content2", "content3", "content4", "content5"];
    const data2 = [
      "content11",
      "content12",
      "content13",
      "content14",
      "content15",
    ];
    const data3 = [
      "content21",
      "content22",
      "content23",
      "content24",
      "content25",
    ];
    let list = data;
    if (selected === 1) {
      list = data1;
    } else if (selected === 2) {
      list = data2;
    } else if (selected === 3) {
      list = data3;
    } else {
      list = data;
    }
    const listTmp = list.map((item, index) => (
      <div key={index}>
        <Person krName={item} engName={item} />
      </div>
    ));
    return <div id="designer-component">{listTmp}</div>;
  };
  const changeSelected = (e) => {
    setSelected(e);
  };
  return (
    <div className="designer-main-div">
      <div className="row" id="designer-head">
        <div className="col-6">
          <p id="designer-head-title">DESIGNER</p>
        </div>
        <div className="col-6" id="designer-head-title-sub-line">
          <div className="row" id="designer-head-title-sub-container">
            <div className="col-4" id="designer-head-sub-line">
              <p id="designer-head-title-sub">
                <button id="designer-head-title-sub" onClick={() =>changeSelected(1)}>
                  CRAFT
                </button>
              </p>
            </div>
            <div className="col-4" id="designer-head-sub-line">
              <p id="designer-head-title-sub">
                <button id="designer-head-title-sub" onClick={() =>changeSelected(2)}>
                  VISUAL
                </button>
              </p>
            </div>
            <div className="col-4">
              <p id="designer-head-title-sub">
                <button id="designer-head-title-sub" onClick={() =>changeSelected(3)}>
                  PRODUCT
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {setPersonList(selected)}
    </div>
  );
}

export default App;
