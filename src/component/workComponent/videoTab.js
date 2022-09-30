import React, { useState, useEffect } from "react";
import './css/videoTab.css';
import axios from "axios";
import Footer from "../js/footer"
import ArtVideoComponent from "./artComponent/js/artComponentVideo";

 function App() {
  const [list, setList] = useState([]);
  useEffect(() =>{
    settingData();
  },[]);
  const settingData = async () => {
    const {data} = await axios({
      method: 'get',
      url: 'http://localhost:8080/visualList',
    });
    
    setList(data);
  };

  const setVideoList = () => { //Single component
    const listTmp = list.map((data, index) => (
      <div key={data.krName}>
        <ArtVideoComponent productName={data.productName} krName={data.krName} />
      </div>
    ));
    return <div id="artComponentVideo-component">{listTmp}</div>;
  }
    return (
      <div className='video-main-div'>
        <div className='row' id="head">
            <div className='col-8' id='head-title-line'>
                <div className='justify-content-end'>
                    <p id='head-title'>CRAFT</p>
                </div>
            </div>
            <div className='col-4' id='head-title-sub-container'>
                <p id='head-title-sub'>영상 디자인</p>
            </div>
        </div>
        <div id="artComponentVideo-container">
            {setVideoList()}
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  