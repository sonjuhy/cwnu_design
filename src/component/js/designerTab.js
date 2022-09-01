import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/designerTab.css";
import Person from './designerComponent';

function App() {
  /**
   * 
   * get data from db
   */
  const [selected, setSelected] = useState(0);
  const [peopleList , setPeopleList] = useState([]);
  const selectCraft = () =>{

  }
  const setPersonList = () => {
    const list = ["content1", "content2", "content3", "content4", "content5"];
    const listTmp = list.map((item, index) => (
      <div key={index}>
        <Person krName={item} engName={item}/>
      </div>
    ));
    return (
      <div id='designer-component'>
        {listTmp}
      </div>
    );
  }
  return (
    <div className="designer-main-div">
      <div className="row" id="designer-head">
        <div className="col-6">
          <p id="designer-head-title">DESIGNER</p>
        </div>
        <div className="col-6" id="designer-head-title-sub-line">
          <div className="row" id='designer-head-title-sub-container'>
            <div className="col-4" id='designer-head-sub-line'>
              <p id="designer-head-title-sub">CRAFT</p>
            </div>
            <div className="col-4" id='designer-head-sub-line'>
              <p id="designer-head-title-sub">VISUAL</p>
            </div>
            <div className="col-4" >
              <p id="designer-head-title-sub">PRODUCT</p>
            </div>
          </div>
        </div>
      </div>
      {setPersonList()}
    </div>
  );
}

export default App;
