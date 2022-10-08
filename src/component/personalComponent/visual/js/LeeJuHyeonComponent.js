import React from "react";
import { Link } from "react-router-dom";
import '../css/LeeJuHyeonComponent.css';

 function App() {
    return (
      <div id='leejuhyeon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/visual/video/LeeJuHyeon/Lee-Ju-Hyeon_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Lee_Ju_Hyeon',
              partName: 'visual/visual',
              studyNum: '20164102',
            }}>
                <img src="assets/img/personal/profile/20164102.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  