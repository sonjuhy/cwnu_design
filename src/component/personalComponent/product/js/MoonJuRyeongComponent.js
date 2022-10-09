import React from "react";
import { Link } from "react-router-dom";
import '../css/MoonJuRyeongComponent.css';

 function App() {
    return (
      <div id='moonjuryeong-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/MoonJuRyeong/Moon-Ju-Ryeong_1.png"/>
            <img id="moonjuryeong-gif" alt="" src="assets/img/personal/product/MoonJuRyeong/gif/Moon-Ju-Ryeong.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/MoonJuRyeong/Moon-Ju-Ryeong_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Moon_Ju_Ryeong',
              partName: 'product/product',
              studyNum: '20184089',
            }}>
                <img src="assets/img/personal/profile/20184089.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  