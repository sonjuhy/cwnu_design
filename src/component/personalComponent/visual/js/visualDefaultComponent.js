import React from "react";
import { Link } from "react-router-dom";
import '../css/visualDefaultComponent.css';

 function App(props) {
    const personName = props.personName;
    const studyNum = props.studyNum;
    const partName = props.partName;
    const profileName = props.profileName;
    const imgPath = `assets/img/personal/visual/${partName}/${profileName}`;
    const profileImgPath = `assets/img/personal/profile/${studyNum}.png`;

    return (
      <div id='visualDefault-main-div'>
        <div id="personal-img-div">
            <img id="personal-img" alt="" src={imgPath}/>
        </div>
        <div id="personal-profile-div" >
            <Link to={'/design_personal'} state={{
              engName: personName,
              partName: 'visual/visual',
              studyNum: studyNum,
            }}>
                <img src={profileImgPath} alt="" style={{width:'30%'}}/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  