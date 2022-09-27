import React, { useState, useEffect } from "react";
import './css/productTab.css';
import axios from "axios";
import Footer from "../js/footer"
import ArtComponent from "./artComponent/js/artComponent";

 function App() {

  const [list, setList] = useState([]);
  useEffect(() =>{
    settingData();
  },[]);
  const settingData = async () => {
    const {data} = await axios({
      method: 'get',
      url: 'http://localhost:8080/productList',
    });
    
    setList(data);
  };


  const setProductList = () => { //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <ArtComponent productName={data.productName} krName={data.krName} />
      </div>
    ));
    return <div id="artComponent-component">{listTmp}</div>;
  }

    return (
      <div className='product-main-div'>
        <div className='row' id="head">
            <div className='col-8' id='head-title-line'>
                <div className='justify-content-end'>
                    <p id='head-title'>CRAFT</p>
                </div>
            </div>
            <div className='col-4' id='head-title-sub-container'>
                <p id='head-title-sub'>제품 디자인</p>
            </div>
        </div>
        <div id="artComponentDouble-container">
            {setProductList()}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  