import React, { useState, useEffect } from "react";
import './css/environmentTab.css';
import Footer from "../js/footer"
import ArtComponentDouble from "./artComponent/js/artComponentDouble"
import axios from "axios";

 function App() {
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

  const setEnvironmentList = () => { //Double component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <ArtComponentDouble productName={data.productName} krName={data.krName} />
      </div>
    ));
    return <div id="artComponentDouble-component">{listTmp}</div>;
  }

    return (
      <div className='environment-main-div'>
        <div className='row' id="head">
            <div className='col-8' id='head-title-line'>
                <div className='justify-content-end'>
                    <p id='head-title'>CRAFT</p>
                </div>
            </div>
            <div className='col-4' id='head-title-sub-container'>
                <p id='head-title-sub'>가구 디자인</p>
            </div>
        </div>
        <div id="artComponentDouble-container">
            {setEnvironmentList()}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  