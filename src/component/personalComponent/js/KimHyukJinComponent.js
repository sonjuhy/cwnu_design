import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/KimHyukJinComponent.css';

 function App() {
    return (
      <div id='kimhyuckjin-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_1.png"/>
            <img id="kimhyuckjin-gif" src="assets/img/personal/visual/video/KimHyukJin/gif/Kim-Hyuk-Jin_1.gif"/>
            <img id="personal-img" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_2.png"/>
            <img id="kimhyuckjin-gif" src="assets/img/personal/visual/video/KimHyukJin/gif/Kim-Hyuk-Jin_2.gif"/>
            <img id="personal-img" src="assets/img/personal/visual/video/KimHyukJin/Kim-Hyuk-Jin_3.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20154090.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  