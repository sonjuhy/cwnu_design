import React from "react";
import { Link } from "react-router-dom";
import '../css/KimJiSooComponent.css';

 function App() {
    return (
      <div id='kimjisoo-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimJiSoo/Kim-Ji-Soo_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Ji_Soo',
              partName: 'product/product',
              studyNum: '20184080',
            }}>
                <img src="assets/img/personal/profile/20184080.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  