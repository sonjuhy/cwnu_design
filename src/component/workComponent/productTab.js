import React, { useState, useEffect } from "react";
import "./css/productTab.css";
import axios from "axios";
import Footer from "../mainComponent/js/footer";
import ArtComponent from "./artComponent/js/artComponent";
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
  const [list, setList] = useState([]);
  useEffect(() => {
    settingData();
  }, []);
  const settingData = async () => {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:8080/productList",
    });

    setList(data);
  };

  const setProductList = () => {
    //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <Link
          to={"/work_personal"}
          state={{
            engName: data.engName,
            partName: "product",
            studyNum: data.num
          }}
        >
          <ArtComponent productName={data.productName} krName={data.krName} engName={data.engName} partName={'제품'}/>
        </Link>
      </div>
    ));
    return <div id="product-artComponent-component">{listTmp}</div>;
  };

  return (
    <div className="product-main-div">
      {loading ? <LoadingPage/> : null}
      <div className="row" id="product-head">
        <div className="col-8" id="product-head-title-line">
          <div className="justify-content-end">
            <p id="product-head-title">PRODUCT</p>
          </div>
        </div>
        <div className="col-4" id="product-head-title-sub-container">
          <p id="product-head-title-sub">제품 디자인</p>
        </div>
      </div>
      <div id="product-artComponent-container">{setProductList()}</div>
      <Footer />
    </div>
  );
}

export default App;
