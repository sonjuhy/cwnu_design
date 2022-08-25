import React, { useState, useEffect } from "react";
import Footer from "./footer";
import "./guestTab.css";

function App() {
  const inputContent =
    "한 해 동안 수고한 졸업생들에게 소중한 한마디씩 부탁드립니다. 졸업생을 향한 욕설 및 비방 댓글은 무단 삭제가 될 수 있습니다.";
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    constructList();
  }, []);

  const constructList = () => {
        /*
    axios.get()
    .then((response) => {
      list = response.content;
      data = list;
      number = list.length();
    });
    */
    const data = ["content1", "content2", "content3", "content4", "content5"];
    if (text !== inputContent && text !== "") {
      const lists = [...data, text];
      setList(lists);  
    }
    else{
      const lists = [...data];
      setList(lists);  
    }
  }
  const setListItem = () => {
    const listTmp = list.map((item, index) => (
      <li key={index} id="list-li">
        {item}
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
      console.log("sendMessage : " + tmpText);
      console.log("sendMessage : " + tmpName);
      /**
       * axios.put()
       */
      onReset();
      constructList();
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
        <div id="list-container">{setListItem()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
