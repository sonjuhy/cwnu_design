import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/HongSunKyungComponent.css';

 function App() {
    return (
      <div id='shindayoung-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/HongSunKyung/Hong-Sun-kyung_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20184115.png" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  