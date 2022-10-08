import React from "react";
import { Link } from "react-router-dom";
import '../css/leeyurimComponent.css';

 function App() {
    return (
      <div id='leeyurim-main-div'>
        <img id="personal-img" alt="" src="assets/img/personal/visual/video/LeeYuRim/LeeYuRim_1.png"/>
        <div id="leeyurim-img1-div">
            <div className="row">
                <div className="col-6">
                </div>
                <div className="col-6">
                <img id="leeyurim-gif" alt="" style={{paddingTop:"40%"}} src="assets/img/personal/visual/video/LeeYuRim/gif/LeeYuRim_1.gif"/>
                </div>
            </div>
            <img id="leeyurim-gif" alt="" style={{paddingTop:"45%"}} src="assets/img/personal/visual/video/LeeYuRim/gif/LeeYuRim_2.gif"/>
            <img id="leeyurim-gif" alt="" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/LeeYuRim/gif/LeeYuRim_3.gif"/>
        </div>
        <div id="leeyurim-img2-div">
        <img id="leeyurim-gif" alt="" style={{paddingTop:"20%"}} src="assets/img/personal/visual/video/LeeYuRim/gif/LeeYuRim_4.gif"/>
        <video id="leeyurim-gif" style={{paddingTop:"5%"}} src="assets/video/personal/visual/LeeYuRim/LeeYuRim_5.mp4" autoPlay muted loop/>
        <img id="leeyurim-gif" alt="" style={{paddingTop:"5%"}} src="assets/img/personal/visual/video/LeeYuRim/gif/LeeYuRim_6.gif"/>
        <video id="leeyurim-gif" style={{paddingTop:"5%"}} src="assets/video/personal/visual/LeeYuRim/LeeYuRim_7.mp4" autoPlay muted loop/>
        <video id="leeyurim-gif" style={{paddingTop:"5%"}} src="assets/video/personal/visual/LeeYuRim/LeeYuRim_8.mp4" autoPlay muted loop/>
        </div>
        <div id="leeyurim-img3-div">
        <video id="leeyurim-gif" style={{paddingTop:"20%"}} src="assets/video/personal/visual/LeeYuRim/LeeYuRim_9.mp4" autoPlay muted loop/>
        <video id="leeyurim-gif" style={{paddingTop:"5%", paddingBottom: "10%"}} src="assets/video/personal/visual/LeeYuRim/LeeYuRim_10.mp4" autoPlay muted loop/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Lee_Yu_Rim',
              partName: 'visual/visual',
              studyNum: '20184103',
            }}>
                <img src="assets/img/personal/profile/20184103.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  