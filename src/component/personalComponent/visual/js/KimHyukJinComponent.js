import React from "react";
import { Link } from "react-router-dom";
import '../css/KimHyukJinComponent.css';

 function App() {
    return (
      <div id='kimhyuckjin-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_1.png"/>
            <img id="kimhyuckjin-gif" alt="" src="assets/img/personal/visual/video/KimHyukJin/gif/Kim-Hyuk-Jin_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_2.png"/>
            <img id="kimhyuckjin-gif" alt="" src="assets/img/personal/visual/video/KimHyukJin/gif/Kim-Hyuk-Jin_2.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_3.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Hyuk_Jin',
              partName: 'visual/visual',
              studyNum: '20154090',
            }}>
                <img src="assets/img/personal/profile/20154090.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  