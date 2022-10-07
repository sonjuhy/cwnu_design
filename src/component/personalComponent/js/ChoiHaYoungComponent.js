import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/ChoiHaYoungComponent.css';

 function App() {
    return (
      <div id='choihayoung-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/ChoiHaYoung/Choi-Ha-Young_1.png"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_1.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_2.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_3.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_4.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_5.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_6.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_7.gif"/>
            <img id="choihayoung-gif" src="assets/img/personal/visual/video/ChoiHaYoung/gif/Choi-Ha-Young_8.gif"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20184113.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  