import React from "react";
import { Link } from "react-router-dom";
import '../css/shinyerinComponent.css';

 function App() {
    return (
      <div id='shinyerin-main-div'>
        <div id="shinyerin-bg">
        <img id="shinyerin-img" alt="" src="assets/img/personal/visual/video/ShinYeRin/ShinYeRin_1.png"/>
        <div id="shinyerin-img-div">
            <div className="row" style={{paddingTop:"20%"}}>
                <div className="col-5">
                    <img id="shinyerin-gif" alt="" style={{float:"right"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_1.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
                <div className="col-5" >
                    <img id="shinyerin-gif" alt="" style={{float:"left"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_2.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
            </div>
            <div className="row" style={{paddingTop:"35%"}}>
            <div className="col-5">
                    <img id="shinyerin-gif" alt="" style={{float:"right"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_3.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
                <div className="col-5" >
                    <img id="shinyerin-gif" alt="" style={{float:"left"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_4.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
            </div>
            <div className="row" style={{paddingTop:"35%", paddingBottom:"20%"}}>
            <div className="col-5">
                    <img id="shinyerin-gif" alt="" style={{float:"right"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_5.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
                <div className="col-5" >
                    <img id="shinyerin-gif" alt="" style={{float:"left"}} src="assets/img/personal/visual/video/ShinYeRin/gif/ShinYeRin_6.gif"/>
                </div>
                <div className="col-1" style={{padding:"0px"}}>

                </div>
            </div>
        </div>
        </div>
        
        <img id="shinyerin-img" alt="" src="assets/img/personal/visual/video/ShinYeRin/ShinYeRin_3.png"/>
        <div id="personal-profile-div">
            <Link to={'/design_personal'} state={{
              engName: 'Shin_Ye_Rin',
              partName: 'visual/visual',
              studyNum: '20184099',
            }}>
                <img src="assets/img/personal/profile/20184099.png" alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  