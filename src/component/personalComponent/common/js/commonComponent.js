import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/commonComponent.css";
import { Link } from "react-router-dom";

import KimyeonghaComponetPage from "../../visual/js/kimyeonghaComponet";
import MoonBoEunComponentPage from "../../visual/js/moonboeunComponent";
import SimSeongHyeonComponentPage from "../../visual/js/simseonghyeonComponent";
import LeeYuRimComponentPage from "../../visual/js/leeyurimComponent";
import BaeSuHyeonComponentPage from "../../visual/js/baesuhyeonComponent";
import ShinYeRinComponentPage from "../../visual/js/shinyerinComponent";
import KimjoEeComponentPage from "../../visual/js/KimJoAeComponent";
import ParkjinHyeongComponentPage from "../../visual/js/ParkJinHyeongComponent";
import LeeSeonHwaComponentPage from "../../visual/js/LeeSeonHwaComponent";
import LeeYuJinComponentPage from '../../visual/js/LeeYuJinComponent';
import KimhyukjinComponentPage from "../../visual/js/KimHyukJinComponent";
import ParkseongWookComponentPage from "../../visual/js/ParkSeongWookComponent";
import ShindayoungComponentPage from "../../visual/js/ShinDaYoungComponent";
import LeeJuhyeonComponentPage from "../../visual/js/LeeJuHyeonComponent";
import ChoihayoungComponentPage from "../../visual/js/ChoiHaYoungComponent";
import HongsunkyungComponentPage from "../../visual/js/HongSunKyungComponent";
import VisualDefaultComponentPage from "../../visual/js/visualDefaultComponent";

function App(props) {
  const location = useLocation();
  const engName = location.state?.engName;
  const partName = location.state?.partName;
  const profileName = location.state?.engName.replaceAll("_", "-");
  const studyNum = location.state?.studyNum;
  const imgLink = `assets/img/personal/${partName}/${profileName}.png`;
  const profileImgLink = `assets/img/personal/profile/${studyNum}.png`;

  // const vipList = ['Bae_Su_Hyeon','Choi_Ha_Young','Hong_Sun_Kyung','Kim_Hyuk_Jin','Kim_Jo_Ae','Kim_Yeong_Ha','','','','','','','','','','',];

  useEffect(() => {
    console.log(location.state?.engName);
    // const engNameTmp = location.state?.engName.replaceAll("_", "-");
  });
  const viewComponents = (el) => {
    const name = el.engName;
    const tmpPart = el.partName.split('/');
    const part = tmpPart[tmpPart.length-1];
    if(name === 'Bae_Su_Hyeon'){
      if(part === 'video'){
        return (
          <BaeSuHyeonComponentPage/>
        )
      }
      else{
        return (
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Bae-Su-Hyeon.png'}/>
        )
      }
    }
    else if(name === 'Choi_Ha_Young'){
      if(part === 'video'){
        return (
          <ChoihayoungComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Choi-Ha-Young.png'}/>
        )
      }
    }
    else if(name === 'Hong_Sun_Kyung'){
      if(part === 'video'){
        return (
          <HongsunkyungComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Hong-Sun-Kyung.png'}/>
        )
      }
      
    }
    else if(name === 'Kim_Hyuk_Jin'){
      if(part === 'video'){
        return (
          <KimhyukjinComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Kim-Hyuk-Jin.png'}/>
        )
      }
      
    }
    else if(name === 'Kim_Jo_Ae'){
      if(part === 'video'){
        return (
          <KimjoEeComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Kim-Jo-Ae.png'}/>
        )
      }
      
    }
    else if(name === 'Kim_Yeong_Ha'){
      if(part === 'video'){
        return (
          <KimyeonghaComponetPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Kim-Yeong-Ha.png'}/>
        )
      }
      
    }
    else if(name === 'Lee_Ju_Hyeon'){
      if(part === 'video'){
        return (
          <LeeJuhyeonComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Lee-Ju-Hyeon.png'}/>
        )
      }
      
    }
    else if(name === 'Lee_Seon_Hwa'){
      if(part === 'video'){
        return (
          <LeeSeonHwaComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Lee-Seon-Hwa.png'}/>
        )
      }
      
    }
    else if(name === 'Lee_Yu_Jin'){
      if(part === 'video'){
        return (
          <LeeYuJinComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Lee-Yu-Jin.png'}/>
        )
      }
      
    }
    else if(name === 'Lee_Yu_Rim'){
      if(part === 'video'){
        return (
          <LeeYuRimComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Lee-Yu-Rim.png'}/>
        )
      }
      
    }
    else if(name === 'Moon_Bo_Eun'){
      if(part === 'video'){
        return (
          <MoonBoEunComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Moon-Bo-Eun.png'}/>
        )
      }
      
    }
    else if(name === 'Park_Jin_Hyeong'){
      if(part === 'video'){
        return (
          <ParkjinHyeongComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Park-Jin-Hyeong.png'}/>
        )
      }
      
    }
    else if(name === 'Park_Seong_Wook'){
      if(part === 'video'){
        return (
          <ParkseongWookComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Park-Seong-Wook.png'}/>
        )
      }
      
    }
    else if(name === 'Shin_Da_Young'){
      if(part === 'video'){
        return (
          <ShindayoungComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Shin-Da-Young.png'}/>
        )
      }
      
    }
    else if(name === 'Shin_Ye_Rin'){
      if(part === 'video'){
        return (
          <ShinYeRinComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Shin-Ye-Rin.png'}/>
        )
      }
      
    }
    else if(name === 'Sim_Seong_Hyeon'){
      if(part === 'video'){
        return (
          <SimSeongHyeonComponentPage/>
        )
      }
      else{
        return(
          <VisualDefaultComponentPage partName={part} personName={engName} studyNum={studyNum} profileName={'Sim-Seong-Hyeon.png'}/>
        )
      }
      
    }
    else{
      return(
      <div id="common-main-div">
        <div>
          <img id="common-img-div" alt="" src={imgLink} />
        </div>
        <div>
          <Link
            to={"/design_personal"}
            state={{
              engName: location.state?.engName,
              partName: location.state?.partName,
              studyNum: studyNum,
            }}
          >
            <img src={profileImgLink} alt="" style={{width:'30%'}} />
          </Link>
        </div>
      </div>
      )
    }
  };
  return (
    <div>
      {viewComponents(location.state)}
    </div>
    
  );
}

export default App;
