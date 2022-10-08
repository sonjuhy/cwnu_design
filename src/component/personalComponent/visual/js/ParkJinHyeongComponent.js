import React from "react";
import { Link } from "react-router-dom";
import '../css/ParkJinHyeongComponent.css';

 function App() {
    return (
      <div id='parkjinhyeong-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/ParkJinHyeong/Park-Jin-Hyeong_1.png"/>
            <video id="personal-video" src="assets/video/personal/visual/ParkJinHyeong/Park-Jin-Hyeong.mp4" controls/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/ParkJinHyeong/Park-Jin-Hyeong_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Park_Jin_Hyeong',
              partName: 'visual/visual',
              studyNum: '20184092',
            }}>
                <img src="assets/img/personal/profile/20184092.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  