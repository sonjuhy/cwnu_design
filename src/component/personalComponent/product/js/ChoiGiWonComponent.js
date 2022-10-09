import React from "react";
import { Link } from "react-router-dom";
import '../css/ChoiGiWonComponent.css';

 function App() {
    return (
      <div id='choigiwon-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src="assets/img/personal/product/ChoiGiWon/Choi-Gi-Won_1.png"/>
        </div>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Choi_Gi_Won',
              partName: 'product/product',
              studyNum: '20184111',
            }}>
                <img src="assets/img/personal/profile/20184111.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  