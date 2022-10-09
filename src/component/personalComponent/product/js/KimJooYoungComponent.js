import React from "react";
import { Link } from "react-router-dom";
import '../css/KimJooYoungComponent.css';

 function App() {
    return (
      <div id='kimjooyoung-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimJooYoung/Kim-Joo-Young_1.png"/>
            <img id="kimjooyoung-gif" alt="" src="assets/img/personal/product/KimJooYoung/gif/Kim-Joo-Young_1.gif"/>
            <img id="kimjooyoung-gif" alt="" src="assets/img/personal/product/KimJooYoung/gif/Kim-Joo-Young_2.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/KimJooYoung/Kim-Joo-Young_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Joo_Young',
              partName: 'product/product',
              studyNum: '20174074',
            }}>
                <img src="assets/img/personal/profile/20174074.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  