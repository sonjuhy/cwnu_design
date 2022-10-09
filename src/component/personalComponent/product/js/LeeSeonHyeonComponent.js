import React from "react";
import { Link } from "react-router-dom";
import '../css/LeeSeonHyeonComponent.css';

 function App() {
    return (
      <div id='leeseonhyeon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/LeeSeonHyeon/Lee-Seon-Hyun_1.png"/>
            <img id="leeseonhyeon-gif" alt="" src="assets/img/personal/product/LeeSeonHyeon/gif/Lee-Seon-Hyun_1.gif"/>
            <img id="personal-img" alt="" src="assets/img/personal/product/LeeSeonHyeon/Lee-Seon-Hyun_2.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Lee_Seon_Hyeon',
              partName: 'product/product',
              studyNum: '20214086',
            }}>
                <img src="assets/img/personal/profile/20214086.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  