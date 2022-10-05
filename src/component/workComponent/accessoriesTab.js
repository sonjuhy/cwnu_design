import React, { useState, useEffect } from "react";
import "./css/accessoriesTab.css";
import Footer from "../mainComponent/js/footer";
import ArtComponent from "./artComponent/js/artComponent";
import axios from "axios";
import { Link } from "react-router-dom";

import LoadingPage from "../loadingComponent/js/loadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
    return () =>{
      // console.log("LoadingPage down");
    }
   },[]);
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
          <Link to="/work_personal" state={{
            engName: data.engName,
            partName: 'craft/accessories',
            studyNum: data.num
            }}>
            <ArtComponent productName={data.productName} krName={data.krName} engName={data.engName} partName = {'장신구'}/>
          </Link>
        </div>
      ));
      return <div id="accessories-artComponent-component">{listTmp}</div>;
    }
  return (
    <div className="accessories-main-div">
      {loading ? <LoadingPage/> : null}
      <div className="row" id="accessories-head">
        <div className="col-8" id='accessories-head-title-line'>
          <p id="head-title">CRAFT</p>
        </div>
        <div className="col-4" id='accessories-head-title-sub-container'>
          <p id="accessories-head-title-sub">장신구 디자인</p>
        </div>
      </div>
        <div id="accessories-artComponent-container">
            {setAccessoriesList()}
        </div>
      <Footer />
    </div>
  );
}

export default App;
