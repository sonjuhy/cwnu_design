import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../css/commonComponent.css';
import axios from "axios";
import { Link } from "react-router-dom";

 function App(props) {
  const location = useLocation();
  const engName = location.state?.engName;
  const partName = location.state?.partName;
  const profileName = location.state?.engName.replaceAll('_', '-');
  const studyNum = location.state?.studyNum;
  const imgLink = `assets/img/personal/${partName}/${profileName}.png`;
  const profileImgLink= `assets/img/personal/profile/${studyNum}.png`;
  

  const vipList = [];

  useEffect(() => {
    console.log(location.state?.engName);
    const engNameTmp = location.state?.engName.replaceAll('_','-');

  })
    return (
      <div id='personal-main-div'>
        <div id="personal-img-div">
            <img src={imgLink}/>
        </div>
        <div>
            <Link to={'/design_personal'} state={{
              engName: location.state?.engName,
              partName: location.state?.partName,
              studyNum: studyNum
            }}>
                <img src={profileImgLink}/>
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  