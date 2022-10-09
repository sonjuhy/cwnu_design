import React, { useState, useEffect } from "react";
import "../css/designerTab.css";
import Person from "./designerComponent";
import axios from "axios";
import { Link } from "react-router-dom";

import {BASE_URL} from '../../../api/URL'

import CraftList from "../../designComponent/js/designerCraftPage";
import VisualList from "../../designComponent/js/designerVisualPage";
import ProductList from "../../designComponent/js/designerProductPage";
import LoadingPage from "../../loadingComponent/js/loadingPage";


function App() {
  const [loading, setLoading] = useState(true);
   const [list, setList] = useState([]);
   useEffect(() => {
     settingData();
   }, []);
   const settingData = async () => {
     const { data } = await axios({
       method: "get",
       url: `${BASE_URL}/allList`,
     });
 
     setList(data);
   };
   useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
    return () =>{
      console.log("LoadingPage down");
    }
   },[]);
  const [selected, setSelected] = useState(0);

  const setPersonList = (e) => {
    const listTmp = list.map((item) => (
      <div key={item.id}>
        <Link to='/design_personal' state={{
          engName: item.engName,
          partName: changeEngToKorPart(item.part),
          studyNum: item.num
        }}>
          <Person krName={item.krName} engName={item.engName} studyNum={item.num} />
        </Link>
      </div>
    ));
    return <div id="designer-component" style={{paddingBottom:'10%'}}>{listTmp}</div>;
  };
  const changeEngToKorPart = (el) => {
    if(el === '공예'){
      return 'craft/craft';
    }
    else if(el === '시각'){
      return 'visual/visual';
    }
    else if(el === '제품'){
      return 'product/product';
    }
    
  }
  const changeSelected = (e) => {
    setSelected(e);
    console.log("setPersonList2 : " + e);
  };

  return (
    <div className="designer-main-div">
      {loading ? <LoadingPage/> : null}
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
      <div style={{paddingBottom:'10%'}}>
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
