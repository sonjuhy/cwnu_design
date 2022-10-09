import React, { useState, useEffect } from "react";
import "./css/environmentTab.css";
import Footer from "../mainComponent/js/footer";
import ArtComponentDouble from "./artComponent/js/artComponentDouble";
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
      url: `${BASE_URL}/craftList`,
    });
    setList(data);
  };
  
  const setEnvironmentList = () => {
    //Double component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <div id="environment-list-title">
          <p id="environment-list-text">{data.krName}</p>
        </div>
        <div className="row">
          <div className="col-6">
            <Link to={"/work_personal"} state={{
              engName: data.engName,
              partName:'craft/environment/normal',
              studyNum: data.num
            }}>
              <ArtComponentDouble
                productName={'Product Name'}
                krName={data.krName}
                engName={data.engName}
                partName = {'가구'}
              />
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/work_personal"} state={{
              engName: data.engName,
              partName:'craft/environment/metal',
              studyNum: data.num
            }}>
              <ArtComponentDouble
                productName={"test"}
                krName={data.krName}
                engName={data.engName}
                partName = {'금속가구'}
              />
            </Link>
          </div>
        </div>
      </div>
    ));
    return <div id="environment-artComponentDouble-component">{listTmp}</div>;
  };

  return (
    <div className="environment-main-div">
      {loading ? <LoadingPage/> : null}
      <div className="row" id="environment-head">
        <div className="col-8" id="environment-head-title-line">
          <div className="justify-content-end">
            <p id="environment-head-title">CRAFT</p>
          </div>
        </div>
        <div className="col-4" id="environment-head-title-sub-container">
          <p id="environment-head-title-sub">가구 디자인</p>
        </div>
      </div>
      <div id="environment-artComponentDouble-container">{setEnvironmentList()}</div>
      <Footer />
    </div>
  );
}

export default App;
