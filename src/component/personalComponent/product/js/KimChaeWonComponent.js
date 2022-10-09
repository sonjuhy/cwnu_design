import React from "react";
import { Link } from "react-router-dom";
import '../css/KimChaeWonComponent.css';

 function App() {
    return (
      <div id='kimchaewon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimChaeWon/Kim-Chae-Won_1.png"/>
            <img id="kimchaewon-gif" alt="" src="assets/img/personal/product/KimChaeWon/gif/Kim-Chae-Won_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/KimChaeWon/Kim-Chae-Won_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Chae_Won',
              partName: 'product/product',
              studyNum: '20184081',
            }}>
                <img src="assets/img/personal/profile/20184081.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  