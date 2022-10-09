import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "../css/artComponent.css";
import axios from "axios";
import {BASE_URL} from '../../../../api/URL'

function App(props) {
  
  const target = useRef();
  const [productName, setProductName] = useState(props.productName);
  const [name, setName] = useState(props.krName);
  const [engName, setEngName] = useState(props.engName);
  const [partName, setPartName] = useState(props.partName);
  const [imgPath, setImgPath] = useState('assets/img/sample.png');

  useEffect(()=>{
    settingProductName();
    const engNameTmp = engName.replaceAll('_','-');
    if(partName === '영상'){
      setImgPath(`assets/img/productImg/visual/video/${engNameTmp}_1.png`);
    }
    else if(partName === '패키지'){
      setImgPath(`assets/img/productImg/visual/package/${engNameTmp}_1.png`);
    }
    else if(partName === '장신구'){
      setImgPath(`assets/img/productImg/craft/accessories/${engNameTmp}_1.png`);
    }
    else if(partName === '제품'){
      setImgPath(`assets/img/productImg/product/${engNameTmp}_1.png`);
    }
  })
  
  const settingProductName = async () => {
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
    <div id="artComponent-main-div" ref={target}>
      <div >
        <p id="artComponent-component-title">{name}</p>
      </div>
      <Fade bottom>
        <div id="artComponent-image-div">
          <figure>
            <img src={imgPath} alt="person_sample" />
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
