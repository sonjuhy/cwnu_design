import React, { useState, useEffect } from "react";
import './css/productTab.css';
import Footer from "../js/footer"

 function App() {
    return (
      <div className='product-main-div'>
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
  