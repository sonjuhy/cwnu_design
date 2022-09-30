import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/simseonghyeonComponent.css';

 function App() {
    return (
      <div id='simseonghyeon-main-div'>
        <div id="simseonghyeon-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyeon_1.png"/>
            <img id="personal-gif" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_1.gif"/>
            <img id="personal-gif" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_2.gif"/>
            <img id="personal-gif" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_3.gif"/>
            <img id="personal-img" src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyeon_3.png"/>
            <img id="personal-gif" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_4.gif"/>
            <img id="personal-img" src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyeon_5.png"/>
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
  