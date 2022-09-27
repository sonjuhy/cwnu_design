import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../css/artComponent.css";

function App(props) {
  /**
   *
   * get data from db
   */
  const target = useRef();
  const [productName, setProductName] = useState(props.productName);
  const [name, setName] = useState(props.krName);

  return (
    <div id="artComponent-main-div" ref={target}>
      <div >
        <p id="artComponent-component-title">{name}</p>
      </div>
      <Fade bottom>
        <div id="artComponent-image-div">
          <figure>
            <img src="assets/img/person_sample.png" alt="person_sample" />
            <figcaption id="artComponent-image-figcaption-div">
              <div id="artComponent-image-text-div">{productName}</div>
            </figcaption>
          </figure>
        </div>
      </Fade>
    </div>
  );
}

export default App;
