import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/designerPage.css";
import ProductList from "./designerPageComponent";

function App() {
  const [nameKor, setNameKor] = useState();
  const [nameEng, setNameEng] = useState();
  const [instagramId, setInstagramId] = useState();
  const [emailAddress, setEmailAddress] = useState();
  const [part, setPart] = useState();

  const [profilePicture, setProfilePicture] = useState("");
  const [productList, setProductList] = useState([]);

  const testName = "testName";

  useEffect(() => {
    /**axios on here */
    setNameKor("한글 이름");
    setNameEng("Eng Name");
    const pictureRoot = "assets/img/" + "person_sample.png";
    setProfilePicture(pictureRoot);
    setEmailAddress("Email@gmail.com");
    setInstagramId("Instagram.com/test");
  });

  const moveToInstagram = () => {
    console.log("moveToInstagram called");
  };

  const makeProductList = () => {
    const tmp = ["product1", "product2", "product3"];
    const list = tmp.map((item) => (
      <div key={item}>
        <ProductList productName={testName} />
      </div>
    ));
    return <div id="designer-page-component">{list}</div>;
  };
  return (
    <div className="designer-page-div">
      <div id="designer-pace-cancel">
        <Link to="/designer" id="designer-page-cancel-link">
          <img src="assets/img/cancel.png" id="designer-page-button"></img>
        </Link>
      </div>

      <div className="row">
        <div className="col-4" id="designer-page-textBox">
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
