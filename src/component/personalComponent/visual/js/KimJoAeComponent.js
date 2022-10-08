import React from "react";
import { Link } from "react-router-dom";
import '../css/KimJoAeComponent.css';

 function App() {
    return (
      <div id='kimjoae-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimJoAe/Kim-Jo-Ae_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/KimJoAe/KimJoAe.mp4" controls/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimJoAe/Kim-Jo-Ae_2.png"/>
        </div>
        <div>
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Jo_Ae',
              partName: 'visual/visual',
              studyNum: '20184079',
            }}>
                <img src="assets/img/personal/profile/20184079.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  