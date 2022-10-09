import React from "react";
import { Link } from "react-router-dom";
import '../css/KimHeeYeonComponent.css';

 function App() {
    return (
      <div id='kimheeyeon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimHeeYeon/Kim-Hee-Yeon_1.png"/>
            <img id="kimheeyeon-gif" alt="" src="assets/img/personal/product/KimHeeYeon/gif/Kim-Hee-Yeon_1.gif"/>
            <img id="kimheeyeon-gif" alt="" src="assets/img/personal/product/KimHeeYeon/gif/Kim-Hee-Yeon_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/KimHeeYeon/Kim-Hee-Yeon_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Kim_Hee_Yeon',
              partName: 'product/product',
              studyNum: '20214075',
            }}>
                <img src="assets/img/personal/profile/20214075.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  