import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/artComponentVideo.css";
import axios from "axios";
import {BASE_URL} from '../../../../api/URL'

function App(props) {

  const [target, setTarget] = useState(null);
  const [productName, setProductName] = useState(props.productName);
  const [name, setName] = useState(props.krName);
  const [partName, setPartName] = useState(props.partName);
  const [imgPath, setImgPath] = useState('assets/img/sample.png');

  useEffect(()=>{
    settingEnvironment();
    const engNameTmp = props.engName.replaceAll('_','-');
    setImgPath(`assets/img/productImg/visual/video/${engNameTmp}_1.png`);
  })
  
  const settingEnvironment = async () => {
    const { data } = await axios({
      method: "get",
      url: `${BASE_URL}/productPerson/`+name,
    });
    for(var i=0; i<data.length; i++){
      if(data[i].subPart === partName){
        setProductName(data[i].name);
        break;
      }
    }
  };

  return (
    <div id="artComponentVideo-main-div" ref={setTarget}>
      <div style={{textAlign:'left', paddingTop:'5%'}}>
        <p id="artComponentVideo-component-title">{name}</p>
      </div>
      <Fade bottom>
        <div id='artComponentVideo-image-div'>
        <figure>
            <img src={imgPath} alt="person_sample" />
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
