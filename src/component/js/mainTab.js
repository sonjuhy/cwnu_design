import {React, useRef } from 'react'
import '../css/mainTab.css';
import Footer from "./footer"

function App() {

    return (
        <div className='main-div'>
            <div className="component-div">
                <video src="assets/video/mainVideo.mp4" autoPlay="autoplay" muted="muted" loop="loop" width="100%" />
            </div>
            <div className="component-div">
                <img src="assets/img/logo_black.png" alt="mainPage logo" width="100px" />
                <p id="graphicmotif">Graphic motif</p>
                <hr className='hr-style'></hr>
                <div className='my-box'><img src="assets/img/main_1.png" alt="sample img" width="100%" /></div>
                <p id="main-content">META KEY 는 키보드에서 컨트롤(Ctrl)이나 알트(Alt) 키와 동시에 눌러졌을 때 다르게 기능하는 키입니다</p>
            </div>
            <div className="component-div">
                <div id="parent-div">
                    <div className='my-box'><img src="assets/img/main_2.png" alt="sample img" width="100%" height="100%" /></div>
                    <span id="main-content">우리에게 주어지는 변화를 컨트롤과 키보드의 키들이 만나 작용하는 효과로 시각화하였습니다.</span>
                </div>
                <img src="assets/img/logo_black.png" alt="mainPage logo" width="100px" />
                <div className='my-box-large'><img src="assets/img/main_3.png" alt="sample img" width="100%" /></div>
                <p id="main-content">키보드 속 각각의 문자들은 우리 개인을 의미합니다. 키보드 속 우리는 졸업이라는 META KEY를 만나 전혀 다른 새로운 작용을 보여주고자 합니다</p>
            </div>
            <Footer />
        </div>
    );
}

export default App;
