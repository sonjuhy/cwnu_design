import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/ShinDaYoungComponent.css';

 function App() {
    return (
      <div id='shindayoung-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/ShinDaYoung/Shin-Da-Young_1.png"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_1.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_2.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_3.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_4.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_5.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_6.gif"/>
            <img id="shindayoung-gif" src="assets/img/personal/visual/video/ShinDaYoung/gif/Shin-Da-Young_7.gif"/>
            <img id="personal-img" src="assets/img/personal/visual/video/ShinDaYoung/Shin-Da-Young_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20174086.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  