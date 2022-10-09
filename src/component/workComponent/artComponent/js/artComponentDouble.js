import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "../css/artComponent.css";
import axios from "axios";
import {BASE_URL} from '../../../../api/URL'

function App(props) {

  const target = useRef();
  const [productName, setProductName] = useState(props.productName);
  const [name, setName] = useState(props.krName);
  const [partName, setPartName] = useState(props.partName);
  const [engName, setEngName] = useState(props.engName);
  const [imgPath, setImgPath] = useState('assets/img/sample.png');
  
  useEffect(()=>{
    settingEnvironment();
    const engNameTmp = props.engName.replaceAll('_','-');
    if(partName === '가구'){
      setImgPath(`assets/img/productImg/craft/environment/normal/${engNameTmp}_1.png`);
    }
    else if(partName === '금속가구'){
      setImgPath(`assets/img/productImg/craft/environment/metal/${engNameTmp}_1.png`);
    }
    else if(partName === '포스터1'){
      setImgPath(`assets/img/productImg/visual/poster/poster1/${engNameTmp}_1.png`);
    }
    else if(partName === '포스터2'){
      setImgPath(`assets/img/productImg/visual/poster/poster2/${engNameTmp}_1.png`);
    }
  })
  
  const settingEnvironment = async () => {
    console.log('Setting environment', BASE_URL);
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
    <div id="artComponent-main-div" ref={target} style={{marginRight:'0%'}}>
      <Fade bottom>
      <div id='artComponent-image-div'>
        <figure>
            <img src={imgPath} alt="person_sample" />
            <figcaption id="artComponent-image-figcaption-div">
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
