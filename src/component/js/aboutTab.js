import { React, useEffect, useState, useRef } from 'react';
import '../css/aboutTab.css';

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
    <div className='about-main-div'>
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
        <div id="about-block-114">
          <div id="about-block-140">
            <img className='about-img' id="about-img-1_s" src='assets/img/info_exhibition.png'/>
            <img className='about-img' id="about-img-2_s" src='assets/img/info_place.png'/>
          </div>
        </div>
        <hr/>
        <div>
          <img src="assets/img/logo_black.png"/>
          <p>ABOUT</p>
          <p>Exhibition</p>
          <div className='row'>
            <div className='col-6'>image div</div>
            <div className='col-6'>scroll up button</div>
          </div>
        </div>
        <hr/>
        <div>
          <img src="assets/img/logo_white.png"/>
          <p>CREDIT</p>
          <img src="assets/img/logo_black.png"/>
          <div>
            <p>졸업준비위원회</p>
          </div>
          <div>
            <p>지도교수</p>
          </div>
          <div className='row'>
            <div className='col-4'>
              <p>PRODUCT</p>
            </div>
            <div className='col-4'>
              <p>VISUAL</p>
            </div>
            <div className='col-4'>
              <p>CRAFT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
