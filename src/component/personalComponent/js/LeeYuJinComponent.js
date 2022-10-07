import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/LeeYuJinComponent.css';

 function App() {
    return (
      <div id='leeyujin-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/LeeYuJin/Lee-Yu-Jin_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/LeeYuJin/Lee-Yu-Jin_1.mp4" controls/>
            <img id="personal-img" src="assets/img/personal/visual/video/LeeYuJin/Lee-Yu-Jin_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20194108.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  