import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/designerPageComponent.css";

function App(props) {
  /**
   * 
   * get data from db
   */
  const [target, setTarget] = useState(null);
  const [productLen, setProductLen] = useState(2);
  const [imageSrc, setImageSrc] = useState("assets/img/sample.png");

  const text = `${props.productName}`;
  const imgSrc = "assets/img/person_sample.png";
  const imgWidth = "50px";

  useEffect(() => {
    settingData(props.productImgPath);
  })
  const settingData = (el) => {
    setImageSrc(el);
  };
  return (
    <div id="designerPageComponent-main-div">
      <Fade bottom>
        <div id='designerPageComponent-image-div'>
        <figure>
            <img src={imageSrc} alt="person_sample"/>
            <figcaption>
              <div id="designerPageComponent-image-text-div">
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
