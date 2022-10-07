import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/workTab.css";

/**
 *
 * use Intersection Observer API
 */
function App() {
  const [selected, setSelected] = useState("");
  const onChangeSelected = (e) => {
    setSelected(e);
  };
  return (
    <div className="workTab-main-div">
      <div className="row" style={{paddingTop:'5%'}}>
        <div className="col-6">
          <div id="workCategory-logo">
            <img
              src="assets/img/work_white_logo.png"
              width="132px"
              alt="white_logo"
            />
          </div>
        </div>
        <div className="col-6"></div>
      </div>

      <div className="row">
        <div className="col-6" id="workCategory-menulist">
          <hr id="workline-left" />
          <p id="workCategory" onClick={() => onChangeSelected("craft")}>
            CRAFT
          </p>
          <p id="workCategory" onClick={() => onChangeSelected("visual")}>
            VISUAL
          </p>
          <p id="workCategory" onClick={() => onChangeSelected("product")}>
            PRODUCT
          </p>
        </div>
        <div className="col-6" id="workCategory-sub-container">
          <span id="workCategory-middle-line"></span>
          {selected === "craft" && (
            <div style={{marginLeft: '8%'}}>
              <Link to="/environment" id="workCategory-linkTo">
                <p id="workCategory-sub">가구 디자인</p>
              </Link>
              <Link to="/accessories" id="workCategory-linkTo">
                <p id="workCategory-sub">장신구 디자인</p>
              </Link>
            </div>
          )}
          {selected === "visual" && (
            <div style={{marginLeft: '8%'}}>
              <Link to="/video" id="workCategory-linkTo">
                <p id="workCategory-sub">영상 디자인</p>
              </Link>
              <Link to="/poster" id="workCategory-linkTo">
                <p id="workCategory-sub">포스터 디자인</p>
              </Link>
              <Link to="/package" id="workCategory-linkTo">
                <p id="workCategory-sub">패키지 디자인</p>
              </Link>
            </div>
          )}
          {selected === "product" && (
            <div style={{marginLeft: '8%'}}>
              <Link to="/product" id="workCategory-linkTo">
                <p id="workCategory-sub">제품 디자인</p>
              </Link>
              {/* <Link to='/furniture' id='workCategory-linkTo'><p id='workCategory-sub'>환경 디자인</p></Link> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
