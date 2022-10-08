import React from "react";
import { Link } from "react-router-dom";
import '../css/KimDaHyeComponent.css';

 function App() {
    return (
      <div id='kimdahye-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/KimDaHye/Kim-Da-Hye_1.png"/>
        </div>
        <div id="personal-profile-div" state={{
              engName: 'Kim_Da_Hye',
              partName: 'product/product',
              studyNum: '20184076',
            }}>
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/20184076.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  