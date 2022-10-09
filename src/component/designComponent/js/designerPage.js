import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/designerPage.css";
import ProductList from "./designerPageComponent";
import axios from "axios";
import {BASE_URL} from '../../../api/URL'

function App(props) {
  const location = useLocation();
  const [nameKor, setNameKor] = useState();
  const [nameEng, setNameEng] = useState();
  const [instagramId, setInstagramId] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const part = location.state?.partName;

  const [profilePicture, setProfilePicture] = useState("");
  const [productList, setProductList] = useState([]);

  
  useEffect(() => {
    console.log(location.state?.partName);
    settingData(location.state?.studyNum);
    
  }, []);

  const settingData = async (el) => {
    const { data } = await axios({
      method: "get",
      url: `${BASE_URL}/socialId/`+location.state?.engName,
    });
    setProfilePicture(`assets/img/personal/profileCut/${el}.jpg`);
    setNameKor(data[0].krName);
    setNameEng(data[0].engName);
    setEmailAddress(data[0].email);
    setInstagramId(data[0].instagram);
    getProductName(data[0].krName);
  };

  const moveToInstagram = () => {
    console.log("moveToInstagram called");
  };

  const getProductName = async (el) => {
    const { data } = await axios({
      method: "get",
      url: `${BASE_URL}/productPerson/`+el,
    });
    
    setProductList(data);
  };

  const makeProductList = () => {
    let tmpList = [];
    console.log("makeProductList called", location.state?.engName);
    const tmpName = location.state?.engName.replaceAll('_','-');
    const tmpPart = part.split('/')[0];
    
    if(tmpPart === 'craft'){
      let productAccessories = 'testName';
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '장신구'){
          productAccessories = productList[i].name;
          break;
        }
      }
      let productNormals =  'testName';
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '가구'){
          productNormals = productList[i].name;
          break;
        }
      }
      let productMetal =  'testName';
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '금속가구'){
          productMetal = productList[i].name;
          break;
        }
      }
      tmpList=[
        {idx:'ㄱ', path:'/assets/img/productImg/craft/accessories/'+tmpName+'_1.png', name:productAccessories},
        {idx:'ㄴ', path:'/assets/img/productImg/craft/environment/normal/'+tmpName+'_1.png', name:productNormals},
        {idx:'ㄷ', path:'/assets/img/productImg/craft/environment/metal/'+tmpName+'_1.png', name:productMetal}];
      
    }
    else if(tmpPart === 'visual'){
      let poster1, poster2, packageName, videoName;
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '포스터1'){
          poster1 = productList[i].name;
          break;
        }
      }
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '포스터2'){
          poster2 = productList[i].name;
          break;
        }
      }
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '패키지'){
          packageName = productList[i].name;
          break;
        }
      }
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '영상'){
          videoName = productList[i].name;
          break;
        }
      }
      tmpList=[
        {idx:'ㄱ', path:'/assets/img/productImg/visual/poster/poster1/'+tmpName+'_1.png', name:poster1},
        {idx:'ㄴ', path:'/assets/img/productImg/visual/poster/poster2/'+tmpName+'_1.png', name:poster2},
        {idx:'ㄷ', path:'/assets/img/productImg/visual/package/'+tmpName+'_1.png', name:packageName},
        {idx:'ㄹ', path:'/assets/img/productImg/visual/video/'+tmpName+'_1.png', name:videoName}];
    }
    else if(tmpPart === 'product'){
      let productName;
      for(let i = 0; i < productList.length; i++){
        if(productList[i].subPart === '제품'){
          productName = productList[i].name;
          break;
        }
      }
      tmpList=[{idx:'ㄱ', path:'/assets/img/productImg/product/'+tmpName+'_1.png', name:productName}];
    }
    const list = tmpList.map((item, index) => (
      <div key={item.idx}>
        <ProductList productName={item.name} productImgPath={item.path}/>
      </div>
    ));
    return <div id="designer-page-component">{list}</div>;
  };
  return (
    <div className="designer-page-div">
      <div id="designer-page-cancel">
        <div id="designer-page-cancel-link">
        <Link to="/designer" >
          <img src="assets/img/cancel.png" id="designer-page-button"/>
        </Link>
        </div>
      </div>

      <div className="row">
      <div className="col-1"></div>
        <div className="col-3" id="designer-page-textBox">
          <div>
            <p id="designer-page-nameKor">{nameKor}</p>
            <p id="designer-page-nameEng">{nameEng}</p>
            <div id="designer-page-email">
              <img
                src="assets/img/icon_email.png"
                id="designer-page-icon"
              ></img>
              <p id="designer-page-icon-text">{emailAddress}</p>
            </div>
            <div id="designer-page-instagram" onClick={moveToInstagram}>
              <img
                src="assets/img/icon_insta_white.png"
                id="designer-page-icon"
              ></img>
              <p id="designer-page-icon-text">{instagramId}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <img src={profilePicture} id="designer-page-person"></img>
        </div>
        <div className="col-4">{makeProductList()}</div>
      </div>
    </div>
  );
}

export default App;
