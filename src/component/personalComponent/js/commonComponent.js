import React, { useState, useEffect } from "react";
import '../css/commonComponent.css';
import axios from "axios";
import { Link } from "react-router-dom";

 function App() {
//   const [list, setList] = useState([]);
//   useEffect(() =>{
//     settingData();
//   },[]);
//   const settingData = async () => {
//     const {data} = await axios({
//       method: 'get',
//       url: 'http://localhost:8080/visualList',
//     });
    
//     setList(data);
//   };

//   const setVideoList = () => { //Single component
//     const listTmp = list.map((data, index) => (
//       <div key={data.krName}>
//         <ArtVideoComponent productName={data.productName} krName={data.krName} />
//       </div>
//     ));
//     return <div id="artComponentVideo-component">{listTmp}</div>;
//   }
    return (
      <div id='personal-main-div'>
        <div id="personal-img-div">
            <img src="assets/img/personal/craft/environment/normal/Gong_Mi_Jeong_1.png"/>
        </div>
        <div>
            <Link to={'/design_personal'}>
                <img src="assets/img/personal/profile/Gong-Mi-Jeong.png"/>'
            </Link>
        </div>
      </div>
    );
  }
  
  export default App;
  