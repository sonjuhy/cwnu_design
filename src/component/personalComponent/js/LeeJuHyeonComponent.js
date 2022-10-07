import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../css/LeeJuHyeonComponent.css';

 function App() {
    return (
      <div id='leejuhyeon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" src="assets/img/personal/visual/video/LeeJuHyeon/Lee-Ju-Hyeon_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20164102.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  