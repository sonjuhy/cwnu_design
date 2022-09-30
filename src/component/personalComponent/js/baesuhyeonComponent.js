import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/baesuhyeonComponent.css';

 function App() {
    return (
      <div id='baesuhyeon-main-div'>
        <img id="baesuhyeon-img" src="assets/img/personal/visual/video/BaeSuHyeon/Bae-Su-Hyeon_1.png"/>
        <video id="baesuhyeon-video" style={{paddingTop:"5%"}} src="assets/video/personal/visual/BaeSuHyeon/baesuhyeon_1.mp4" controls/>
        <div id="baesuhyeon-img-div">
            <img id="baesuhyeon-gif" style={{paddingTop:"65%"}} src="assets/img/personal/visual/video/BaeSuHyeon/gif/Bae-Su-Hyeon_1.gif"/>
            
            <img id="baesuhyeon-gif" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/BaeSuHyeon/gif/Bae-Su-Hyeon_2.gif"/>
            <img id="baesuhyeon-gif" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/BaeSuHyeon/gif/Bae-Su-Hyeon_3.gif"/>
            <img id="baesuhyeon-gif" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/BaeSuHyeon/gif/Bae-Su-Hyeon_4.gif"/>
            <img id="baesuhyeon-gif" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/BaeSuHyeon/gif/Bae-Su-Hyeon_5.gif"/>
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
  