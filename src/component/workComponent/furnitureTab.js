import React, { useState, useEffect } from "react";
import './css/furnitureTab.css';
import Footer from "../footer"

 function App() {
    return (
      <div className='furniture-main-div'>
        <div className='row'>
            <div className='col-8'>
                <div className='justify-content-end'>
                    <p id='head-title'>CRAFT</p>
                </div>
            </div>
            <div className='col-4'>
                <p id='head-title-sub'>장신구 디자인</p>
            </div>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default App;
  