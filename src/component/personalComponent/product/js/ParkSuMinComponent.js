import React from "react";
import { Link } from "react-router-dom";
import '../css/ParkSuMinComponent.css';

 function App() {
    return (
      <div id='parksumin-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/ParkSuMin/Park-Su-Min_1.png"/>
            <img id="parksumin-gif" alt="" src="assets/img/personal/product/ParkSuMin/gif/Park-Su-Min_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/ParkSuMin/Park-Su-Min_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Park_Su_Min',
              partName: 'product/product',
              studyNum: '20174082',
            }}>
                <img src="assets/img/personal/profile/20174082.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  