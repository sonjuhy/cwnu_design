import React, { useState, useEffect } from "react";
import "./css/videoTab.css";
import axios from "axios";
import Footer from "../mainComponent/js/footer";
import ArtVideoComponent from "./artComponent/js/artComponentVideo";
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

  const setVideoList = () => {
    //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <Link
          to={"/work_personal"}
          state={{
            engName: data.engName,
            partName: "visual/video",
            studyNum: data.num
          }}
        >
          <ArtVideoComponent
            productName={data.productName}
            krName={data.krName}
            engName={data.engName}
            partName={"영상"}
          />
        </Link>
      </div>
    ));
    return <div id="video-artComponentVideo-component">{listTmp}</div>;
  };
  return (
    <div className="video-main-div">
      {loading ? <LoadingPage/> : null}
      <div className="row" id="head">
        <div className="col-8" id="video-head-title-line">
          <div className="justify-content-end">
            <p id="video-head-title">VISUAL</p>
          </div>
        </div>
        <div className="col-4" id="video-head-title-sub-container">
          <p id="video-head-title-sub">영상 디자인</p>
        </div>
      </div>
      <div id="video-artComponentVideo-container">{setVideoList()}</div>
      <Footer />
    </div>
  );
}

export default App;
