import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/designerComponent.css";

function App(props) {
  /**
   * 
   * get data from db
   */
  const [target, setTarget] = useState(null);

  const text = `${props.krName}\n${props.engName}`;

  return (
    <div id="designerComponent-main-div" ref={setTarget}>
      <Fade bottom>
        <div id='designerComponent-image-div'>
        <figure>
            <img src="assets/img/person_sample.png" alt="person_sample" />
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
