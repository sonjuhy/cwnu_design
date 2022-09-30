import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/moonboeunComponent.css';

 function App() {
    return (
      <div id='moonboeun-main-div'>
        <div id="moonboeun-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/MoonBoEun/Moon_Bo_Eun_1.png"/>
            <video controls id="personal-video" src="assets/video/personal/visual/MoonBoEun/moonboeun.mp4"/>
            <img id="personal-img-background" src="assets/img/personal/visual/video/MoonBoEun/Moon_Bo_Eun_2.png"/>
            
            <video id="personal-video" src="assets/video/personal/visual/MoonBoEun/Moon_Bo_Eun_1.mp4" muted autoPlay loop/>
            <img id="personal-img-background" src="assets/img/personal/visual/video/MoonBoEun/Moon_Bo_Eun_3.png"/>
            <div className="row">
                <div className="col-6" id="personal-video-container">
                <video id="personal-video-front" src="assets/video/personal/visual/MoonBoEun/Moon_Bo_Eun_2.mp4" muted autoPlay loop/>
                </div>
                <div className="col-6" id="personal-video-container">
                <video id="personal-video-front" src="assets/video/personal/visual/MoonBoEun/Moon_Bo_Eun_3.mp4" muted autoPlay loop/>
                </div>
            </div>
            <img id="personal-img-background" src="assets/img/personal/visual/video/MoonBoEun/Moon_Bo_Eun_4.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/Gong-Mi-Jeong.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  