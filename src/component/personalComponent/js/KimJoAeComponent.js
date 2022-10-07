import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/KimJoAeComponent.css';

 function App() {
    return (
      <div id='kimjoae-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/KimJoAe/Kim-Jo-Ae_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/KimJoAe/KimJoAe.mp4" controls/>
            <img id="personal-img" src="assets/img/personal/visual/video/KimJoAe/Kim-Jo-Ae_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20184079.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  