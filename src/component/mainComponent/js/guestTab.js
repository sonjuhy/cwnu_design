import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import Footer from "./footer";
import axios from "axios";
import "../css/guestTab.css";

import {BASE_URL} from '../../../api/URL'

function App() {
  const inputContent =
    "한 해 동안 수고한 졸업생들에게 소중한 한마디씩 부탁드립니다. 졸업생을 향한 욕설 및 비방 댓글은 무단 삭제가 될 수 있습니다.";
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    constructList();
  }, []);

  const constructList = async () => {
    const {data} = await axios.get(`${BASE_URL}/guestAllList`);
    setList(data);
  }
  const createMessage = async (name, content) => {
    await axios.post(`${BASE_URL}/guestInsert`,{
      name: name,
      content: content
    }).then(constructList);
  }
  const setListItem = () => {
    const listTmp = list.map((item, index) => (
      <li key={item.id} id="list-li">
        {item.content}
      </li>
    ));
    return (
      <div>
        <ul>{listTmp}</ul>
      </div>
    );
  };
  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onReset = () => {
    setText("");
    setName("");
  };
  const sendMessage = (tmpText, tmpName) => {
    if (tmpText !== inputContent && tmpText !== "" && tmpName !== "") {
      createMessage(tmpName, tmpText);
      onReset();
    } else if (tmpText === inputContent || tmpText === "") {
      alert("내용을 입력해주세요.");
    } else if (tmpName === "") {
      alert("이름을 입력해주세요.");
    }
  };
  return (
    <div className="main-div">
      <div className="container">
        <div id="input-container-name" className="justify-content-start">
          <span>Name | </span>
          <input
            type="text"
            value={name}
            id="input-text-name"
            onChange={onChangeName}
          />
        </div>
        <div id="input-container">
          <div className="row">
            <div className="col-10">
              <input
                type="text"
                placeholder={inputContent}
                value={text}
                id="input-text"
                onChange={onChangeText}
              />
            </div>
            <div className="col-2" id="input-button-container">
              <button
                type="button"
                className="btn"
                id="input-button"
                onClick={()=>sendMessage(text, name)}
              >
                SEND
              </button>
            </div>
          </div>
        </div>
        <Fade left>
          <div id="list-container">{setListItem()}</div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default App;
