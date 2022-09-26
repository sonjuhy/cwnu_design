import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/artComponentVideo.css";

function App(props) {
  /**
   * 
   * get data from db
   */
  const [target, setTarget] = useState(null);
  const [productName, setProductName] = useState(props.productName);
  const [name, setName] = useState(props.krName);

  return (
    <div id="artComponent-main-div" ref={setTarget}>
        <p>{name}</p>
      <Fade bottom>
        <div id='artComponent-image-div'>
        <figure>
            <img src="assets/img/person_sample.png" alt="person_sample" />
            <figcaption>
              <div id="artComponent-image-text-div">
                {productName}
              </div>
            </figcaption>
        </figure>
        </div>
      </Fade>
    </div>
  );
}

export default App;
