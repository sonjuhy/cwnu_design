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
    <div id="artComponentVideo-main-div" ref={setTarget}>
      <div >
        <p id="artComponentVideo-component-title">{name}</p>
      </div>
      <Fade bottom>
        <div id='artComponentVideo-image-div'>
        <figure>
            <img src="assets/img/person_sample.png" alt="person_sample" />
            <figcaption  id="artComponentVideo-image-figcaption-div">
              <div id="artComponentVideo-image-text-div">
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
