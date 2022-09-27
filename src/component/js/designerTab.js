import React, { useState, useEffect } from "react";
import "../css/designerTab.css";
import Person from "./designerComponent";
import axios from "axios";

import CraftList from "../designComponent/js/designerCraftPage";
import VisualList from "../designComponent/js/designerVisualPage";
import ProductList from "../designComponent/js/designerProductPage";

function App() {

   const [list, setList] = useState([]);
   useEffect(() => {
     settingData();
   }, []);
   const settingData = async () => {
     const { data } = await axios({
       method: "get",
       url: "http://localhost:8080/allList",
     });
 
     setList(data);
   };

  const [selected, setSelected] = useState(0);

  const setPersonList = (e) => {
    const listTmp = list.map((item) => (
      <div key={item}>
        <Person krName={item.krName} engName={item.engName} />
      </div>
    ));
    return <div id="designer-component">{listTmp}</div>;
  };

  const changeSelected = (e) => {
    setSelected(e);
    console.log("setPersonList2 : " + e);
  };

  return (
    <div className="designer-main-div">
      <div className="row" id="designer-head">
        <div className="col-6">
          <p id="designer-head-title" onClick={() => setSelected(0)} style={{cursor: 'pointer'}}>DESIGNER</p>
        </div>
        <div className="col-6" id="designer-head-title-sub-line">
          <div className="row" id="designer-head-title-sub-container">
            <div className="col-4" id="designer-head-sub-line">
              <p id="designer-head-title-sub">
                <button
                  id="designer-head-title-sub"
                  onClick={() => changeSelected(1)}
                >
                  CRAFT
                </button>
              </p>
            </div>
            <div className="col-4" id="designer-head-sub-line">
              <p id="designer-head-title-sub">
                <button
                  id="designer-head-title-sub"
                  onClick={() => changeSelected(2)}
                >
                  VISUAL
                </button>
              </p>
            </div>
            <div className="col-4">
              <p id="designer-head-title-sub">
                <button
                  id="designer-head-title-sub"
                  onClick={() => changeSelected(3)}
                >
                  PRODUCT
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selected === 0 && (
          <div className="designer-list-div">
            {setPersonList()}
          </div>
        )}
        {selected === 1 && (
          <CraftList />
        )}
        {selected === 2 && (
          <VisualList />
        )}
        {selected === 3 && (
          <ProductList />
        )}
      </div>
    </div>
  );
}

export default App;
