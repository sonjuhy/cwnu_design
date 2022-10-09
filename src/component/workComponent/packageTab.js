import React, { useState, useEffect } from "react";
import "./css/packageTab.css";
import Footer from "../mainComponent/js/footer";
import ArtComponent from "./artComponent/js/artComponent";
import axios from "axios";
import { Link } from "react-router-dom";
import {BASE_URL} from '../../api/URL'

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

  const [list, setList] = useState([]);
  useEffect(() => {
    settingData();
  }, []);
  const settingData = async () => {
    const { data } = await axios({
      method: "get",
      url: `${BASE_URL}/visualList`,
    });

    setList(data);
  };

  const setPackageList = () => {
    //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <Link
          to={"/work_personal"}
          state={{
            engName: data.engName,
            partName: "visual/package",
            studyNum: data.num
          }}
        >
          <ArtComponent
            productName={data.productName}
            krName={data.krName}
            engName={data.engName}
            partName={"패키지"}
          />
        </Link>
      </div>
    ));
    return <div id="package-artComponent-component">{listTmp}</div>;
  };
  return (
    <div className="package-main-div">
      {loading ? <LoadingPage/> : null}
      <div className="row" id="package-head">
        <div className="col-8" id="package-head-title-line">
          <div className="justify-content-end">
            <p id="package-head-title">VISUAL</p>
          </div>
        </div>
        <div className="col-4" id="package-head-title-sub-container">
          <p id="package-head-title-sub">패키지 디자인</p>
        </div>
      </div>
      <div id="package-artComponent-container">{setPackageList()}</div>
      <Footer />
    </div>
  );
}

export default App;
