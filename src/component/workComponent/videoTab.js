import React, { useState, useEffect } from "react";
import './css/videoTab.css';
import Footer from "../js/footer"

 function App() {
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
        <Footer/>
      </div>
    );
  }
  
  export default App;
  