import React from "react";
import { Link } from "react-router-dom";
import '../css/HongSunKyungComponent.css';

 function App() {
    return (
      <div id='shindayoung-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/HongSunKyung/Hong-Sun-kyung_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Hong_Sun_Kyung',
              partName: 'visual/visual',
              studyNum: '20184115',
            }}>
                <img src="assets/img/personal/profile/20184115.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  