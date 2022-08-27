import React, { useState } from "react";
import { Link } from "react-router-dom";
import './workTab.css';

/**
 * 
 * use Intersection Observer API
 */
function App() {
  const [selected, setSelected] = useState('');
  const onChangeSelected = (e) => {
    setSelected(e);
  }
    return (
      <div className='workTab-main-div'>
        <div className='row'>
          <div className='col-6'>
            <img src='assets/img/logo_white.png' width='200px' alt='white_logo'/>
            <hr id='workline-left'/>
            <p id='workCategory' onClick={() => onChangeSelected('craft')}>CRAFT</p>
            <p id='workCategory' onClick={() => onChangeSelected('visual')}>VISUAL</p>
            <p id='workCategory' onClick={() => onChangeSelected('product')}>PRODUCT</p>
          </div>
          <div className='col-6' id='workCategory-sub-container'>
            <div id='workCategory-sub-blink'></div>
            {selected === 'craft' && (
              <div>
                <Link to='/environment'><p id='workCategory-sub'>가구 디자인</p></Link>
                <Link to='/accessories'><p id='workCategory-sub'>장신구 디자인</p></Link>
              </div>
            )}
            {selected === 'visual' && (
              <div>
                <Link to='/video'><p id='workCategory-sub'>영상 디자인</p></Link>
                <Link to='/poster'><p id='workCategory-sub'>포스터 디자인</p></Link>
                <Link to='/package'><p id='workCategory-sub'>패키지 디자인</p></Link>
              </div>
            )}
            {selected === 'product' && (
              <div>
                <Link to='/product'><p id='workCategory-sub'>제품 디자인</p></Link>
                <Link to='/furniture'><p id='workCategory-sub'>환경 디자인</p></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  