import React, { useState, useEffect } from "react";
import "./css/posterTab.css";
import Footer from "../mainComponent/js/footer";
import ArtComponentDouble from "./artComponent/js/artComponentDouble";
import axios from "axios";
import { Link } from "react-router-dom";

import LoadingPage from "../loadingComponent/js/loadingPage";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 4500);
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
      url: "http://localhost:8080/visualList",
    });
    setList(data);
  };

  const setPosterList = () => {
    //Double component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <div>
          <div className="row">
            <div id="poster-list-title">
              <p>{data.krName}</p>
            </div>
            <div className="col-6">
              <Link to={"/work_personal"}
              state={{
                engName: data.engName,
                partName:'visual/poster/poster1',
                studyNum: data.num
              }}>
                <ArtComponentDouble
                  productName={"Product Name"}
                  krName={data.krName}
                  engName={data.engName}
                  partName={"포스터1"}
                />
              </Link>
            </div>
            <div className="col-6">
              <Link to={"/work_personal"}
              state={{
                engName: data.engName,
                partName:'visual/poster/poster2',
                studyNum: data.num
              }}>
                <ArtComponentDouble
                  productName={"test"}
                  krName={data.krName}
                  engName={data.engName}
                  partName={"포스터2"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div id="poster-artComponentDouble-component">{listTmp}</div>;
  };

  return (
    <div className="poster-main-div">
      {loading ? <LoadingPage/> : null}
      <div style={{ paddingBottom: "5%" }}>
        <div className="row" id="poster-head">
          <div className="col-8" id="poster-head-title-line">
            <div className="justify-content-end">
              <p id="poster-head-title">VISUAL</p>
            </div>
          </div>
          <div className="col-4" id="poster-head-title-sub-container">
            <p id="poster-head-title-sub">포스터 디자인</p>
          </div>
        </div>
      </div>
      <div>{setPosterList()}</div>
      <Footer />
    </div>
  );
}

export default App;
