import React from "react";
import { Link } from "react-router-dom";
import '../css/simseonghyeonComponent.css';

 function App() {
    return (
      <div id='simseonghyeon-main-div'>
        <div id="simseonghyeon-img-div">
            <img id="personal-img" alt="." src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyeon_1.png"/>
            <img id="personal-gif" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_1.gif"/>
            <img id="personal-gif" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_2.gif"/>
            <img id="personal-gif" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_3.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyun_3.png"/>
            <img id="personal-gif" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/gif/SimSeongHyun_4.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/SimSeongHyeon/SimSeongHyun_5.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Sim_Seong_Hyeon',
              partName: 'visual/visual',
              studyNum: '20214083',
            }}>
                <img alt="" src="assets/img/personal/profile/20214083.png" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  