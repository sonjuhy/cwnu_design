import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/workTab.css';

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
        <div id='workCategory-logo'>
          <img src='assets/img/logo_white.png' width='200px' alt='white_logo'/>
        </div>
        <div className='row'>
          <div className='col-6'>
            <hr id='workline-left'/>
            <p id='workCategory' onClick={() => onChangeSelected('craft')}>CRAFT</p>
            <p id='workCategory' onClick={() => onChangeSelected('visual')}>VISUAL</p>
            <p id='workCategory' onClick={() => onChangeSelected('product')}>PRODUCT</p>
          </div>
          <div className='col-6' id='workCategory-sub-container'>
            {selected === 'craft' && (
              <div>
                <Link to='/environment' id='workCategory-linkTo'><p id='workCategory-sub'>가구 디자인</p></Link>
                <Link to='/accessories' id='workCategory-linkTo'><p id='workCategory-sub'>장신구 디자인</p></Link>
              </div>
            )}
            {selected === 'visual' && (
              <div>
                <Link to='/video' id='workCategory-linkTo'><p id='workCategory-sub'>영상 디자인</p></Link>
                <Link to='/poster' id='workCategory-linkTo'><p id='workCategory-sub'>포스터 디자인</p></Link>
                <Link to='/package' id='workCategory-linkTo'><p id='workCategory-sub'>패키지 디자인</p></Link>
              </div>
            )}
            {selected === 'product' && (
              <div>
                <Link to='/product' id='workCategory-linkTo'><p id='workCategory-sub'>제품 디자인</p></Link>
                <Link to='/furniture' id='workCategory-linkTo'><p id='workCategory-sub'>환경 디자인</p></Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default App;
  