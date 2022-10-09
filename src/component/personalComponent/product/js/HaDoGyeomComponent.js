import React from "react";
import { Link } from "react-router-dom";
import '../css/HaDoGyeomComponent.css';

 function App() {
    return (
      <div id='hadogyeom-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/HaDoGyeom/Ha-Do-Gyeom_1.png"/>
            <img id="hadogyeom-gif" alt="" src="assets/img/personal/product/HaDoGyeom/gif/Ha-Do-Gyeom_1.gif"/>
            <img id="hadogyeom-gif" alt="" src="assets/img/personal/product/HaDoGyeom/gif/Ha-Do-Gyeom_2.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/HaDoGyeom/Ha-Do-Gyeom_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Ha_Do_Gyeom',
              partName: 'product/product',
              studyNum: '20174104',
            }}>
                <img src="assets/img/personal/profile/20174104.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  