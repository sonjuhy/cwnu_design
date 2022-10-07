import { React, useEffect, useState, useRef } from "react";
import "../css/aboutTab.css";

function App() {
  const boxRef = useRef(null);
  const [ScrollY, setScrollY] = useState(0);
  const [ScrollActive, setScrollActive] = useState(false);

  function logit() {
    setScrollY(boxRef.current.scrollTop);
    if (boxRef.current.scrollTop > 30) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  // useEffect(() => {
  //   function watchScroll() {
  //     boxRef.current.addEventListener("scroll", logit);
  //   }
  //   watchScroll();
  //   return () => {
  //     boxRef.current.removeEventListener("scroll", logit);
  //   };
  // });

  return (
    <div className="about-main-div">
      {/* <div className="content1">
        <div className="header">
            Header1
        </div>
        content1
    </div>

    <div className="content2">
        <div className="header">
            Header2
        </div>
        content2
    </div> */}

      <div id="about-body-div">
        <div style={{height:'75vh', marginBottom:'7%', marginTop:'7%'}}>
          <img src="assets/img/about-movingposter.gif" style={{height: '100%'}}></img>
        </div>
        <hr style={{width:'60%', margin:'auto', height:'10px', opacity:'1'}}/>
        <div id="about-title-sub-container">
          <img src="assets/img/logo_black.png" style={{width:'5%', marginBottom:'2%', marginTop:'5%'}}/>
          <p id='about-title-sub-black' style={{marginBottom:'3%'}}>ABOUT</p>
          <p id='about-title-sub-black' style={{marginBottom:'7%'}}>Exhibition</p>
          <hr style={{width:'40%', margin:'auto'}}/>
          </div>
        {/* <div id="about-block-114"></div> */}
        <div>
          <div className="row">
            <div className="col-6">
              <div id="about-block-140">
                <img
                  className="about-img"
                  id="about-img-1_s"
                  src="assets/img/about_middle_poster.png"
                  style={{width:'65%'}}
                />
                <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/trans.png"
                />
              </div>
            </div>
            <div className="col-6">
              <div id="about-block-140">
                <img
                  className="about-img"
                  id="about-img-1_s"
                  src="assets/img/scrollDown_info_black.png"
                  style={{width: '35%', marginTop:'30%'}}
                />
                <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/info_exhibition.png"
                />
                {/* <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/about_middle_poster.png"
                /> */}
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="row">
            <div className="col-6">
              <div id="about-block-140">
                <img
                  className="about-img"
                  id="about-img-1_s"
                  src="assets/img/about_middle_poster.png"
                  style={{width:'65%'}}
                />
                <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/trans.png"
                />
              </div>
            </div>
            <div className="col-6">
              <div id="about-block-140">
                <img
                  className="about-img"
                  id="about-img-1_s"
                  src="assets/img/scrollDown_info_black.png"
                  style={{width: '35%', marginTop:'30%'}}
                />
                <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/info_exhibition.png"
                />
                {/* <img
                  className="about-img"
                  id="about-img-2_s"
                  src="assets/img/about_middle_poster.png"
                /> */}
              </div>
            </div>
          </div>
        </div>

        <div id='about-bottom-container'>
        <div style={{paddingTop:'20%'}}>
          <img src="assets/img/logo_black.png" style={{width:'5%', marginBottom:'1%'}} />
          <p id='about-title-sub-black'>CREDIT</p>
          <hr style={{margin:'auto', width:'15%', color:'black',marginTop:'3%', marginBottom:'8%'}}/>
          <img src="assets/img/about_fakelife.jpg" style={{width: '30%'}}/>
          <div  style={{marginBottom:'5%'}}>
            <p id='about-intro-title'  style={{marginBottom:'2%'}}>졸업전시준비위원회</p>
            <p id='about-intro-content' style={{marginBottom:'5%'}}>위원장 허  경 | 공미정 김지현 김채은 김주영 이유진</p>
          </div>
          <div  style={{marginBottom:'5%'}}>
            <p id='about-intro-title'  style={{marginBottom:'2%'}}>지도교수</p>
            <p id='about-intro-content' style={{marginBottom:'1%'}}>송상민</p>
            <p id='about-intro-content' style={{marginBottom:'1%'}}>김홍규</p>
            <p id='about-intro-content' style={{marginBottom:'1%'}}>한세준</p>
            <p id='about-intro-content' style={{marginBottom:'1%'}}>박일권</p>
            <p id='about-intro-content' style={{marginBottom:'1%'}}>김정섭</p>
          </div>
          <div className="row" style={{marginTop:'3%', marginBottom:'5%'}}>
            <div className="col-3"></div>
            <div className="col-2">
              <p id='about-intro-title'>PRODUCT</p>
              <p id='about-intro-content'>김다혜 김주영</p>
              <p id='about-intro-content'>김지수 김채원</p>
              <p id='about-intro-content'>김채은 김희연</p>
              <p id='about-intro-content'>문주령 박수민</p>
              <p id='about-intro-content'>이선현 최기원</p>
              <p id='about-intro-content'>하도겸</p>
            </div>
            <div className="col-2">
              <p id='about-intro-title'>VISUAL</p>
              <p id='about-intro-content'>김영하 김조애</p>
              <p id='about-intro-content'>김혁진 문보은</p>
              <p id='about-intro-content'>박성욱 박진형</p>
              <p id='about-intro-content'>배수현 신다영</p>
              <p id='about-intro-content'>신예린 심성현</p>
              <p id='about-intro-content'>이선화 이유림</p>
              <p id='about-intro-content'>이유진 이주현</p>
              <p id='about-intro-content'>최하영 홍선경</p>
            </div>
            <div className="col-2">
              <p id='about-intro-title'>CRAFT</p>
              <p id='about-intro-content'>공미정 김보현</p>
              <p id='about-intro-content'>김지현 김채은</p>
              <p id='about-intro-content'>김하연 김현지</p>
              <p id='about-intro-content'>김현진 김희현</p>
              <p id='about-intro-content'>박세운 이은채</p>
              <p id='about-intro-content'>정주은 조하정</p>
              <p id='about-intro-content'>허  경</p>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <div style={{paddingBottom:'5%', marginTop:'10%'}}>
          <p id='about-footer-text'>2022 CHANGWON NATIONAL UNIVERSITY INDUSTRIAL DESIGN THE 32TH GRADUATION SHOW "METAKEY"</p>
          <p id='about-footer-text'>@cwnu.gradshow</p>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
