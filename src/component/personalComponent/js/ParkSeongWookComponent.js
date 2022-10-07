import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/ParkSeongWookComponent.css';

 function App() {
    return (
      <div id='parkseongwook-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/ParkSeongWook/Park-Seong-Wook_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/ParkSeongWook/ParkSeongWook_1.mp4" autoPlay muted loop />
            <img id="personal-img" src="assets/img/personal/visual/video/ParkSeongWook/Park-Seong-Wook_2.png"/>
            <video id="personal-video" src="assets/video/personal/visual/ParkSeongWook/ParkSeongWook_2.mp4" autoPlay muted loop />
            <img id="personal-img" src="assets/img/personal/visual/video/ParkSeongWook/Park-Seong-Wook_3.png"/>
            <img id="parkseongwook-gif" src="assets/img/personal/visual/video/ParkSeongWook/gif/Park-Seong-Wook_3.gif"/>
            <img id="parkseongwook-gif" src="assets/img/personal/visual/video/ParkSeongWook/gif/Park-Seong-Wook_4.gif"/>
            <div id="parkseongwook-bg">
            <video id="parkseongwook-video" src="assets/video/personal/visual/ParkSeongWook/ParkSeongWook_5.mp4" autoPlay muted loop />
            <img id="personal-img" src="assets/img/personal/visual/video/ParkSeongWook/Park-Seong-Wook_4.png"/>
            </div>
            
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20174081.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  