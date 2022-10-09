import React from "react";
import { Link } from "react-router-dom";
import '../css/KimChaeEunComponent.css';

 function App() {
    return (
      <div id='kimchaeeun-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimChaeEun/Kim-Chae-Eun_1.png"/>
            <img id="kimchaeeun-gif" alt="" src="assets/img/personal/product/KimChaeEun/gif/Kim-Chae-Eun_1.gif"/>
            <img id="kimchaeeun-gif" alt="" src="assets/img/personal/product/KimChaeEun/gif/Kim-Chae-Eun_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/KimChaeEun/Kim-Chae-Eun_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Chae_Eun',
              partName: 'product/product',
              studyNum: '20194095',
            }}>
                <img src="assets/img/personal/profile/20194095.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  