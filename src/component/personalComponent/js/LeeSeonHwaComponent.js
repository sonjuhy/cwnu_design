import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/LeeSeonHwaComponent.css';

 function App() {
    return (
      <div id='leeseonhwa-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/LeeSeonHwa/Lee-Seon-Hwa_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/LeeSeonHwa/Lee-Seon-Hwa.mp4" controls/>
            <img id="personal-img" src="assets/img/personal/visual/video/LeeSeonHwa/Lee-Seon-Hwa_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20184101.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  