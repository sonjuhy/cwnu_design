import React, { useState, useEffect } from "react";
import "./css/accessoriesTab.css";
import Footer from "../footer";

function App() {
    const [names,setNames] = useState([]);
    useEffect(() => {
        /**
         * axios.get
         */
    },[]);
    const accessoriesComponent = (data) => {
        
        return(
            <div>
                <p>Name</p>
                <img src='assets/images/asdf.png' alt='asdf' />
            </div>
        );
    }
    const setAccessoriesList = () => {

    }
  return (
    <div className="accessories-main-div">
      <div className="row" id="head">
        <div className="col-8" id='head-title-line'>
          <p id="head-title">CRAFT</p>
        </div>
        <div className="col-4" id='head-title-sub-container'>
          <p id="head-title-sub">장신구 디자인</p>
        </div>
      </div>
        <div>
            {setAccessoriesList()}
        </div>
      <Footer />
    </div>
  );
}

export default App;
