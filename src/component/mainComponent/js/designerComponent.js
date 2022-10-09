import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/designerComponent.css";

function App(props) {

  const [target, setTarget] = useState(null);
  const [list, setList] = useState([]);
  const [profileImgPath, setProfileImgPath] = useState('assets/img/sample.png');
  const [imgPath, setImgPath] = useState('assets/img/sample.png');
  
  const text = `${props.krName}\n${props.engName}`;
  const studyNum = props.studyNum;

  useEffect(() => {
    settingData();
  })
  const settingData = () => {
    setImgPath(`assets/img/personal/profileCut/${studyNum}.jpg`);
  };

  return (
    <div id="designerComponent-main-div" ref={setTarget}>
      <Fade bottom>
        <div id='designerComponent-image-div'>
        <figure id="designerComponent-img-figcaption">
            <img src={imgPath} alt="person_sample" />
            <figcaption>
              <div id="designerComponent-image-text-div">
                {text}
              </div>
            </figcaption>
        </figure>
        </div>
      </Fade>
    </div>
  );
}

export default App;
