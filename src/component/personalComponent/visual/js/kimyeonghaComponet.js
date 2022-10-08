import React from "react";
import { Link } from "react-router-dom";
import '../css/kimyeonghaComponet.css';

 function App() {
    return (
      <div id='personal-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/Kim-Yeong-Ha_1-1.png"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/Kim-Yeong-Ha_1-2.png"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/Kim-Yeong-Ha_1-3.png"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/gif/Kim_Yeong_Ha_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/gif/Kim_Yeong_Ha_2.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/gif/Kim_Yeong_Ha_3.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/gif/Kim_Yeong_Ha_4.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/Kim-Yeong-Ha_2.png"/>
            <video id="personal-video" src="assets/video/personal/visual/KimYeongHa/KimYeongHa_5.mp4" autoPlay muted loop />
            <video id="personal-video" src="assets/video/personal/visual/KimYeongHa/KimYeongHa_6.mp4" autoPlay muted loop />
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/KimYeongHa/Kim-Yeong-Ha_3.png"/>
        </div>
        <div>
            <Link to={'/design_personal'}state={{
              engName: 'Kim_Yeong_Ha',
              partName: 'visual/visual',
              studyNum: '20184078',
            }}>
                <img src="assets/img/personal/profile/20184078.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  